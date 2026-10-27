/* 「存储空间」：数据目录在哪、所在磁盘还剩多少、各类数据各占多少，清理可重建的几类，
 * 或把整个数据目录迁到别的磁盘。
 *
 * 统计与清理在服务端后台线程里跑，进行中每 1.5 秒问一次状态。迁移请求被接受后服务会退出，
 * 页面只留一句回执：托盘完成迁移后会自己重新打开 Peach。 */
import { useEffect, useRef, useState } from 'react';
import { confirmModal } from '@peach/legacy/ui';
import { fmtSize } from '@peach/legacy/core';

import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Button } from '@/components/base/buttons/button';

import { ApiError, apiGet, apiSend, errorMessage } from '../../api';
import { PICK_FOLDER_URL } from '../../configuration-endpoints';
import type { StorageCategory, StorageState } from '../bundle';
import { PathLine } from '../components/path-line';
import { ErrorText, Fact, FactList, Footer, Help, Rows, Section, Stack } from './section';
import { busyProps, useAction } from './use-action';

const STORAGE_URL = '/api/configuration/storage';
const POLL_MS = 1500;
/** 迁移完成的回执留一天；之后只在还有要处理的事（备注）时显示。 */
const RESULT_MS = 24 * 3600 * 1000;

const targetReason = (cause: unknown) =>
  (cause instanceof ApiError && (cause.body as { errors?: { target?: string } } | null)?.errors?.target)
  || errorMessage(cause);

function diskLine(storage: StorageState) {
  if (storage.free_bytes === null || storage.total_bytes === null) return 'Unavailable';
  const line = `${fmtSize(storage.free_bytes)} available of ${fmtSize(storage.total_bytes)}`;
  return storage.system_drive ? `${line} (system drive)` : line;
}

export function StorageSettings({ initial, receipt }: { initial: StorageState; receipt(message: string): void }) {
  const [storage, setStorage] = useState(initial);
  const [accepted, setAccepted] = useState('');
  const action = useAction();
  const running = storage.job.state !== 'idle';
  const reported = useRef(running);

  useEffect(() => {
    if (!running) return;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      apiGet<StorageState>(STORAGE_URL, controller.signal).then(setStorage, () => {
        if (!controller.signal.aborted) setStorage((current) => ({ ...current }));
      });
    }, POLL_MS);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [storage]);

  // 一轮统计或清理结束：成功的回执走 Toast，失败的原因留在分区里。
  useEffect(() => {
    if (running) { reported.current = true; return; }
    if (!reported.current) return;
    reported.current = false;
    if (!storage.job.error) receipt(storage.job.message || 'Storage usage calculated');
  }, [running]);

  const measure = () => void action.run('measure', (signal) =>
    apiSend<StorageState>(`${STORAGE_URL}/measure`, {}, 'POST', signal), setStorage);

  const clean = (category: StorageCategory) => void confirmModal({
    title: `Clean ${category.label}`,
    body: `This will delete ${fmtSize(category.reclaimable)} of ${category.label} — ${category.description}.`,
    confirmLabel: `Clean ${category.label}`,
    danger: category.key === 'backups',
    onConfirm: async () => setStorage(await apiSend<StorageState>(`${STORAGE_URL}/clean`, { category: category.key })),
  });

  const relocate = () => void action.run('relocate', async (signal) => {
    const picked = (await apiSend<{ path: string | null }>(PICK_FOLDER_URL, { initial: storage.data_root }, 'POST', signal)).path;
    if (!picked) return;
    const size = storage.usage ? fmtSize(storage.usage.total_bytes) : '';
    await confirmModal({
      title: 'Move Data Folder',
      body: `Move ${size} of data from ${storage.data_root} to ${picked}. Peach will exit during the move and reopen automatically when complete. Data in the original location will be deleted after the new copy is verified.`,
      confirmLabel: 'Move Data Folder',
      onConfirm: async () => {
        try {
          setAccepted((await apiSend<{ message: string }>(`${STORAGE_URL}/relocate`, { target: picked })).message);
        } catch (cause) {
          throw new Error(targetReason(cause));
        }
      },
    });
  }, () => undefined);

  const usage = storage.usage;
  const last = storage.relocation.last;
  const recent = last && (last.state === 'error' || (last.notes?.length ?? 0) > 0
    || Date.now() - last.finished_at * 1000 < RESULT_MS);
  const status = accepted
    || (storage.job.state === 'measuring' ? 'Calculating storage usage…'
      : storage.job.state === 'cleaning' ? 'Cleaning…'
        : usage ? `Total: ${fmtSize(usage.total_bytes)} — ${usage.total_files.toLocaleString()} files` : '');
  const locked = running || Boolean(accepted);
  return (
    <Section id="storageSettings" title="Storage">
      <FactList>
        <Fact term="Data Folder">
          <PathLine path={storage.data_root} className="text-body-regular text-text-primary" onRevealed={receipt} />
        </Fact>
        <Fact term="Drive">{diskLine(storage)}</Fact>
      </FactList>
      {usage ? (
        <Rows>
          {usage.categories.map((category) => (
            <SettingsRow key={category.key} label={category.label}
              description={category.cleanable && category.description ? category.description : undefined}>
              <div className="flex shrink-0 items-center gap-3">
                <span className="text-body-regular text-text-secondary tabular-nums">{fmtSize(category.bytes)}</span>
                {category.cleanable && category.reclaimable > 0 ? (() => {
                  const cleaning = storage.job.state === 'cleaning' && storage.job.category === category.key;
                  return (
                    <Button variant="secondary" disabled={locked && !cleaning} {...busyProps(cleaning)}
                      onClick={() => clean(category)}>
                      Clean  {fmtSize(category.reclaimable)}
                    </Button>
                  );
                })() : null}
              </div>
            </SettingsRow>
          ))}
        </Rows>
      ) : (
        <Stack divided><Help>Calculate usage by category, then clean caches and old backups.</Help></Stack>
      )}
      {!storage.relocation.available || storage.job.error || action.error || recent ? (
        <Stack divided>
          {!storage.relocation.available ? <Help>{storage.relocation.message}</Help> : null}
          {storage.job.error ? <ErrorText>{storage.job.message}</ErrorText> : null}
          {action.error ? <ErrorText>{action.error}</ErrorText> : null}
          {recent && last ? (last.state === 'error'
            ? <ErrorText>{last.message}</ErrorText>
            : <Help>{[last.message, ...(last.notes ?? [])].join('; ')}</Help>) : null}
        </Stack>
      ) : null}
      <Footer status={status ? <p role={accepted ? 'status' : undefined}>{status}</p> : null}>
        <Button variant="secondary" disabled={locked || !storage.relocation.available || !usage}
          onClick={relocate} {...busyProps(action.busy === 'relocate')}>Change Location</Button>
        <Button disabled={Boolean(accepted) || storage.job.state === 'cleaning'} onClick={measure}
          {...busyProps(action.busy === 'measure' || storage.job.state === 'measuring')}>
          {usage ? 'Recalculate' : 'Calculate Usage'}
        </Button>
      </Footer>
    </Section>
  );
}
