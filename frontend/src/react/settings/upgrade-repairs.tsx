/** 升级补修与程序安装分别显示；复核和重试都由用户明确发起。 */
import { useEffect, useState } from 'react';
import { Button } from '@/components/base/buttons/button';
import { apiSend } from '../../api';
import { useClientUpdates } from '../client-updates';
import type { ClientUpdates } from '../client-updates';
import { StatusLabel } from '../components/status-label';
import { ErrorText, ExternalLink, Fact, FactList, Footer, Help, Section, Stack } from './section';
import { useAction } from './use-action';

const LABELS: Record<string, string> = { pending: 'Pending Repair', running: 'Repairing', failed: 'Retry Required',
  review: 'Review Required', complete: 'Complete', unavailable: 'Not Enabled for This Deployment' };

export function UpgradeRepairs() {
  const { snapshot } = useClientUpdates();
  const [saved, setSaved] = useState<ClientUpdates['repairs'] | null>(null);
  const action = useAction();
  useEffect(() => setSaved(null), [snapshot]);
  const data = saved ?? snapshot?.repairs;
  const state = data?.state || 'pending';
  const pending = data?.items.reduce((count, row) => count + (row.pending || 0), 0) || 0;
  const failed = data?.items.reduce((count, row) => count + (row.failed || 0), 0) || 0;
  const review = data?.items.reduce((count, row) => count + (row.review_count || 0), 0) || 0;
  const retry = () => void action.run('retry', signal => apiSend<ClientUpdates['repairs']>(
    '/api/configuration/upgrade-repairs/retry', {}, 'POST', signal), next => {
    setSaved(next);
    document.dispatchEvent(new Event('peach:client-updates'));
  });
  return <Section id="upgradeRepairs" title="Automatic Repairs" aside={<StatusLabel
    tone={state === 'failed' ? 'error' : state === 'running' ? 'progress' : state === 'review' ? 'warning'
      : state === 'complete' ? 'success' : 'neutral'}><span key={state}
        data-copy-key={`upgradeRepairs.${state}.status`}>{LABELS[state] || 'Unavailable'}</span></StatusLabel>}>
    <Stack><Help>Automatically repairs metadata and refreshes caches after an upgrade.</Help></Stack>
    <FactList>
      <Fact term="Pending">{pending} items</Fact>
      <Fact term="Failed">{failed} items</Fact>
      <Fact term="Pending Review">{review} items</Fact>
    </FactList>
    {data?.message || action.error ? <Stack><ErrorText>{action.error || data?.message}</ErrorText></Stack> : null}
    {state === 'running' ? <Stack><Help>Metadata and previews are being completed in the background. View progress on the Activity page.</Help></Stack> : null}
    <Footer status={review ? <ExternalLink href="/api/configuration/upgrade-repairs/review">Download Review Log</ExternalLink> : undefined}>
      <Button size="small" variant="secondary" disabled={!data?.available || state === 'running' || !!action.busy || (!failed && state !== 'failed')}
        onClick={retry}>Retry Failed Items</Button>
    </Footer>
  </Section>;
}
