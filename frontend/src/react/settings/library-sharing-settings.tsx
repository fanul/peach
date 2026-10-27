import { useMemo, useState } from 'react';

import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Button } from '@/components/base/buttons/button';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Switch } from '@/components/base/switch/switch';

import { apiGet, apiSend } from '../../api';
import { CodeBlock } from '../components/code-block';
import { StatusLabel } from '../components/status-label';
import { Disclosure, ErrorText, Footer, Help, Rows, Stack } from './section';
import { busyProps, useAction } from './use-action';

export interface LibrarySharingState {
  enabled: boolean; available: boolean; schema: number; fields: string[]; notice: string;
  last_attempt?: { period?: string; status?: string; reason?: string; attempted?: boolean };
}
interface Preview { data: { library: unknown[]; preferences: unknown; coverage: { uncoded_items: number } }; bytes: number; token: string; schema: number }

export function LibrarySharingSettings({ initial, receipt }: {
  initial: LibrarySharingState; receipt(message: string): void;
}) {
  const [value, setValue] = useState(initial);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const previewText = useMemo(() => preview ? JSON.stringify(preview.data, null, 2) : '', [preview]);
  const action = useAction();
  const save = (enabled: boolean) => void action.run('save', (signal) =>
    apiSend<LibrarySharingState>('/api/configuration/library-sharing', {
      enabled, schema: value.schema, consent: accepted, preview_token: preview?.token,
    }, 'POST', signal), (saved) => {
    setValue(saved); setPreview(null); setAccepted(false); setReviewing(false); receipt('Library and preference upload options saved');
  });
  const downloadPreview = () => {
    const url = URL.createObjectURL(new Blob([previewText], { type: 'application/json' }));
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = 'peach-library-taste-preview.json';
    document.body.append(anchor);
    try { anchor.click() } finally {
      anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  };
  return <>
    <Rows><SettingsRow label="Upload Library and Preference Details" description={value.notice}>
      <Switch aria-label="Upload Library and Preference Details" isSelected={value.enabled}
        onChange={(enabled) => enabled ? setReviewing(true) : save(false)}
        {...busyProps(action.busy === 'save')} />
    </SettingsRow></Rows>
    {!value.available ? <Stack divided><span className="self-start"><StatusLabel>Upload Service Not Configured</StatusLabel></span></Stack> : null}
    {value.enabled && value.last_attempt?.status === 'failed'
      ? <Stack divided><span className="self-start"><StatusLabel tone={value.last_attempt.attempted ? 'error' : 'warning'}>{value.last_attempt.attempted ? 'Upload Failed' : 'Waiting to Retry'}</StatusLabel></span><ErrorText>{value.last_attempt.attempted
        ? 'Library and preference upload failed and will not be retried this week.' : 'Library and preference upload did not complete and will be prepared again automatically.'}</ErrorText></Stack> : null}
    {value.enabled && value.last_attempt?.status === 'waiting-data'
      ? <Stack divided><span className="self-start"><StatusLabel>Waiting for Data</StatusLabel></span><Help>Waiting for library or preference data that can be analyzed.</Help></Stack> : null}
    {value.enabled && value.last_attempt?.status === 'unknown'
      ? <Stack divided><span className="self-start"><StatusLabel tone="warning">Result Unavailable</StatusLabel></span><Help>No upload result was received. It will not be sent again this week.</Help></Stack> : null}
    {preview ? <Stack divided>
      <Help>This preview summarizes {preview.data.library.length} coded titles and {preview.data.coverage.uncoded_items} uncoded library items, totaling about {(preview.bytes / 1024).toFixed(1)} KiB. It does not include personal data such as accounts, devices, file paths, or browser history.</Help>
      <Disclosure summary="Upload Data Preview" defaultOpen>
        <CodeBlock code={previewText} language="json" label="Library and Preference Upload Preview" maxCharacters={24000} />
      </Disclosure>
      {previewText.length > 24000 ? <Help>Showing the first 24,000 characters. Download to view the complete content.</Help> : null}
      <Button variant="secondary" onClick={downloadPreview}>Download Full Preview</Button>
      {!value.enabled ? <Checkbox isSelected={accepted} onChange={setAccepted}>I reviewed the preview and agree to upload library and preference details</Checkbox> : null}
    </Stack> : null}
    {action.error ? <Stack divided><ErrorText>{action.error}</ErrorText></Stack> : null}
    <Footer>
      {reviewing && !value.enabled ? <Button variant="secondary" onClick={() => {
        setReviewing(false); setPreview(null); setAccepted(false);
      }}>Cancel</Button> : null}
      <Button variant="secondary" onClick={() => { setReviewing(true); void action.run('preview',
        (signal) => apiGet<Preview>('/api/configuration/library-sharing/preview', signal),
        (data) => { setPreview(data); setAccepted(false) }) }}
        {...busyProps(action.busy === 'preview')}>Preview Upload</Button>
      {!value.enabled && preview ? <Button variant="primary" disabled={!accepted} onClick={() => save(true)}
        {...busyProps(action.busy === 'save')}>Agree and Enable Upload</Button> : null}
    </Footer>
  </>;
}
