/* 用户脚本通过同源桥接页回报版本与当前地址的配对状态。 */
import { Button } from '@/components/base/buttons/button';
import { cardClass } from '../components/card';
import { ConnectionStatus } from '../components/connection-status';
import { StatusLabel } from '../components/status-label';
import { ExternalLink } from './section';
import { busyProps } from './busy-props';
import { useUserscriptProbe } from './userscript-probe';

export function userscriptVersionSupported(version: string, minimumVersion: string) {
  const current = version.split('.').map(Number);
  const minimum = minimumVersion.split('.').map(Number);
  for (let index = 0; index < 3; index++) {
    if (current[index] !== minimum[index]) return current[index]! > minimum[index]!;
  }
  return true;
}

export function UserscriptStatus({ enabled, release }: {
  enabled: boolean; release: { version: string; minimum_version: string; install_url: string };
}) {
  const { frame, attempt, status, retry } = useUserscriptProbe();
  const installed = typeof status === 'object';
  const required = installed && !userscriptVersionSupported(status.version, release.minimum_version);
  const update = installed && !userscriptVersionSupported(status.version, release.version);
  const tone = status === 'checking' ? 'progress' : status === 'missing' ? 'neutral'
    : required || update || !status.paired ? 'warning' : 'success';
  const label = status === 'checking' ? 'Checking' : status === 'missing' ? 'Not Detected'
    : required ? 'Update Required' : update ? 'Update Available' : status.paired ? 'Connected' : 'Not Paired';
  const copyState = status === 'checking' ? 'checking' : status === 'missing' ? 'missing'
    : required ? 'required' : update ? 'available' : status.paired ? enabled ? 'enabled' : 'disabled' : 'unpaired';
  return <>
    <iframe ref={frame} key={attempt} title="Peach Userscript Check" hidden src="/integrations/peach-userscript-bridge" />
    <div aria-live="polite" data-userscript-status="" className={cardClass({ variant: 'raised', bordered: 'line', className: 'flex flex-col gap-3' })}>
      <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-body-medium text-text-primary">Peach Userscript</span>
        <ConnectionStatus tone={tone}><span data-copy-key={`userscript.${copyState}.status`}>{label}</span></ConnectionStatus></div>
      {installed ? <p data-copy-key="userscript.installed.version" className="text-body-regular text-text-secondary">Userscript v{status.version}</p> : null}
      <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-body-regular text-text-secondary">Browser Add-on</span>
        <StatusLabel tone={enabled ? 'success' : 'neutral'}><span data-copy-key={`userscript.adding.${enabled ? 'enabled' : 'disabled'}`}>{enabled ? 'Enabled' : 'Disabled'}</span></StatusLabel></div>
      <p data-copy-key={`userscript.${copyState}.message`} className="text-caption-1-regular text-text-secondary">{status === 'checking' ? 'Checking for the userscript in this browser.' : status === 'missing'
        ? 'Make sure the script is enabled and up to date. In Chrome, also enable “Allow User Scripts” or Developer Mode in the Tampermonkey extension details and allow access to this Peach site. Refresh the page, then check again.'
        : required ? `Update to v${release.minimum_version} or later.`
        : update ? `Userscript v${release.version} is available.`
        : status.paired ? enabled ? 'You can add titles to Peach directly from supported sites.' : 'Enable browser adding to add titles to Peach directly from supported sites.'
        : 'Generate a token, copy the pairing information, then paste and save it in the userscript settings.'}</p>
      <div className="flex flex-wrap items-center gap-2">
        {status === 'missing' || required || update ? <ExternalLink href={release.install_url}><span data-copy-key={`userscript.${status === 'missing' ? 'install' : 'update'}.action`}>{required || update ? 'Update Userscript' : 'Install Peach Userscript'}</span></ExternalLink> : null}
        {status === 'missing' ? <ExternalLink href="https://www.tampermonkey.net/faq.php#Q209">Tampermonkey Permission Setup</ExternalLink> : null}
        <Button variant="secondary" type="button" {...busyProps(status === 'checking')}
          onClick={retry}>Check Again</Button>
      </div>
    </div>
  </>;
}
