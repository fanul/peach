/* 检查更新：当前与最新版本、下载安装进度，准备好之后确认重启。
 *
 * 更新任务进行中每秒问一次状态，空闲时 30 秒一次；连续 120 次问不到就停下并说明原因。 */
import { useEffect, useRef, useState } from 'react';
import { confirmModal } from '@peach/legacy/ui';

import { Button } from '@/components/base/buttons/button';

import { apiGet, apiSend, errorMessage } from '../../api';
import type { ReleaseState, UpdateJob } from '../bundle';
import { Note } from '../components/note';
import { Progress } from '../components/progress';
import { StatusLabel } from '../components/status-label';
import { ErrorText, ExternalLink, Fact, FactList, Footer, Help, Section, Stack } from './section';
import { busyProps, useAction } from './use-action';

const ACTIVE = new Set(['downloading', 'verifying', 'extracting', 'preparing', 'restarting', 'installing']);
const STOPS = [65, 75, 90];
const MAX_FAILURES = 120;

export function ReleaseUpdates({ initial, initialJob }: { initial: ReleaseState; initialJob?: UpdateJob | undefined }) {
  const [data, setData] = useState(initial);
  const [job, setJob] = useState<UpdateJob>(initialJob || { state: 'idle', progress: 0 });
  const [pollError, setPollError] = useState('');
  const action = useAction();
  const prompted = useRef(false);
  const mounted = useRef(true);
  const running = ACTIVE.has(job.state);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const restart = async () => {
    const result = await apiSend<UpdateJob>('/api/configuration/update-restart', {});
    if (mounted.current) setJob(result);
  };
  const confirmRestart = () => void confirmModal({
    title: 'Update Ready', body: `Peach ${job.version || ''} will be installed after Peach restarts.`,
    confirmLabel: 'Restart Now', cancelLabel: 'Later', onConfirm: restart,
  });

  useEffect(() => {
    if (job.state !== 'ready' || prompted.current) return;
    prompted.current = true;
    confirmRestart();
  }, [job.state]);

  useEffect(() => {
    const controller = new AbortController();
    const delay = ACTIVE.has(job.state) ? 1000 : 30000;
    let timer: ReturnType<typeof setTimeout>;
    let failures = 0;
    const poll = async () => {
      try {
        const result = await apiGet<UpdateJob>('/api/configuration/update-status', controller.signal);
        if (controller.signal.aborted) return;
        setJob(result);
        failures = 0;
        if (result.state === 'complete') {
          setData((current) => ({ ...current, current_version: result.version || current.current_version, state: 'current', message: 'You already have the latest beta.' }));
        }
        const automatic = await apiGet<{ result?: ReleaseState }>('/api/configuration/automatic-updates', controller.signal);
        if (!controller.signal.aborted && automatic.result) setData(automatic.result);
      } catch {
        failures += 1;
        if (failures >= MAX_FAILURES && !controller.signal.aborted) setPollError('Peach is not connected yet. Check the tray app, then refresh the page.');
      }
      if (!controller.signal.aborted && failures < MAX_FAILURES) timer = setTimeout(poll, delay);
    };
    timer = setTimeout(poll, delay);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [job.state]);

  const download = () => {
    if (running) return;
    prompted.current = false;
    setPollError('');
    void action.run('download', (signal) => apiSend<UpdateJob>('/api/configuration/update', {}, 'POST', signal), setJob);
  };
  const check = () => void action.run('check', (signal) => apiGet<ReleaseState>('/api/configuration/updates', signal), setData,
    (cause) => { setData({ ...initial, state: 'error' }); action.setError(errorMessage(cause)); });

  const error = action.error || pollError;
  const reading = job.state === 'downloading' && job.total
    ? `${((job.downloaded || 0) / 1048576).toFixed(1)} / ${(job.total / 1048576).toFixed(1)} MB`
    : `${job.progress}%`;
  return (
    <Section id="releaseUpdates" title="Check for Updates" aside={<StatusLabel tone={error || data.state === 'error' || job.state === 'error' ? 'error' : running ? 'progress' : data.state === 'available' ? 'warning' : data.state === 'unchecked' ? 'neutral' : 'success'}>
      {error || data.state === 'error' || job.state === 'error' ? 'Check Incomplete' : running ? 'Preparing Update' : job.state === 'ready' ? 'Ready to Install' : data.state === 'available' ? 'Update Available' : data.state === 'unchecked' ? 'Not Checked' : 'Check Complete'}</StatusLabel>}>
      <FactList>
        <Fact term="Current Version">{data.current_version}</Fact>
        <Fact term="Installation Type">{data.installation}</Fact>
        <Fact term="Update Channel">{data.channel}</Fact>
        <Fact term="Latest Version">{data.latest_version || 'Unavailable'}</Fact>
        {data.package_kind ? <Fact term="Download Contents">
          {data.package_kind === 'update' ? 'App Update Package' : 'App and Tools'}
          {data.asset_size ? ` · ${(data.asset_size / 1048576).toFixed(1)} MB` : ''}
        </Fact> : null}
      </FactList>
      {data.package_kind === 'update'
        ? <Help>App updates reuse installed tools. Required tool packages are downloaded separately when tools are missing, damaged, or changed.</Help>
        : data.package_kind === 'full' ? <Help>This update includes media tools.</Help> : null}
      {data.state === 'unchecked' && !data.checked_at && !error && job.state === 'idle' ? null : <Stack divided>
        {data.checked_at ? <Help>Checked {new Date(data.checked_at * 1000).toLocaleString()}</Help> : null}
        {data.state === 'available' && !error
          ? <Note tone="info" title="Update Available">{data.message}</Note>
          : error || data.state === 'error'
            ? <ErrorText>{error || data.message}</ErrorText>
            : data.state === 'unchecked' ? null : <Help role="status">{data.message}</Help>}
        {job.state === 'error' ? <ErrorText>{job.message}</ErrorText> : null}
        {job.state !== 'idle' && job.state !== 'error' ? (
          <div aria-live="polite" className="flex flex-col gap-2">
            <Progress label="Update Preparation Progress" value={job.progress} stops={STOPS} />
            <Help>Download → Verify → Extract → Prepare to Install · {job.message}</Help>
            <Help>{reading}</Help>
          </div>
        ) : null}
      </Stack>}
      <Footer status={<div className="flex flex-wrap items-center gap-3">
        <ExternalLink href="https://peach.video/#download">Official Website</ExternalLink>
        <span className="inline-flex flex-wrap items-center gap-2">
          <ExternalLink href="https://github.com/peach-mitao/peach">GitHub</ExternalLink>
          <StatusLabel>Updates Unavailable</StatusLabel>
        </span>
        <ExternalLink href="https://gitgud.io/peach-mitao/peach/-/releases">View Releases</ExternalLink>
      </div>}>
        <Button variant={job.state === 'ready' || (data.state === 'available' && data.installation === '独立测试包') ? 'secondary' : 'primary'}
          disabled={running} onClick={check} {...busyProps(action.busy === 'check')}>Check for Updates</Button>
        {data.state === 'available' && data.installation === '独立测试包' && job.state !== 'ready'
          ? <Button variant="primary" onClick={download} {...busyProps(running || action.busy === 'download')}>Download and Install</Button>
          : null}
        {job.state === 'ready' ? <Button variant="primary" onClick={confirmRestart}>Restart and Install</Button> : null}
      </Footer>
    </Section>
  );
}
