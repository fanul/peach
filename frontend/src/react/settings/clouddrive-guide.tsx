/* 媒体来源选了网盘时的 CloudDrive 起步配置。
 *
 * 页内只留填哪里、填多少、怎么确认；三处缓存的分工、换算与起步值的来源在
 * `docs/CLOUDDRIVE.md`，这里链过去，同一段话不在两处维护。 */
import { Disclosure, ExternalLink, Help } from './section';

export const CLOUDDRIVE_PROFILES = [
  { name: 'Hard drive, or up to 8 GB RAM', cache: '10–20 GiB', read: '256 / 128 KB', task: '1' },
  { name: 'SATA SSD, 8–16 GB RAM', cache: '20–50 GiB', read: '256 / 128 KB', task: '1–2' },
  { name: 'NVMe SSD, 16 GB or more RAM', cache: '50–100 GiB', read: '256 / 128 KB', task: 'Start with 2' },
] as const;

const READINGS = [['cache', 'Cache Limit'], ['read', 'Read Size (Default / Minimum)'], ['task', 'Concurrent Videos']] as const;

export function CloudDriveGuide() {
  return (
    <div className="@container flex flex-col gap-3">
      <Disclosure summary="CloudDrive Setup Help">
        <Help>
          First mount cloud storage from CloudDrive2 or OpenList as a local folder, then select it here.
          <ExternalLink href="https://www.clouddrive2.com/help.html">Mounting Help</ExternalLink>
        </Help>
        <Help>Choose an initial cache size based on its drive and available memory, then adjust it based on playback performance.</Help>
        <Help>File operations require write access from both the mounting tool and cloud account. Uploading, creating folders, renaming, and moving on Quack Cloud Drive require CloudDrive2 v1.1.0 or later; deleting and copying are not yet supported.</Help>
        {/* 三档同形、跨档比较：窄处每档一块纵排，宽处三项读数排成三列对齐。 */}
        <ul aria-label="Recommendations by cache drive" className="flex flex-col gap-2">
          {CLOUDDRIVE_PROFILES.map((profile) => (
            <li key={profile.name} className="flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3">
              <p className="text-body-medium text-text-primary">{profile.name}</p>
              <dl className="inline-grid grid-cols-1 gap-2 @md:grid-cols-3">
                {READINGS.map(([key, term]) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-caption-1-regular text-text-secondary">{term}</dt>
                    <dd className="text-body-regular text-text-primary">{profile[key]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
        <ul className="flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary">
          <li>Set the cache limit and cleanup method in CloudDrive Settings, and choose LRU. Do not set the limit to 0; leave at least 40 GiB free on the system drive. Reopen Settings afterward to confirm the values were saved.</li>
          <li>Set the read size and download threads in each cloud drive’s download settings. Start with 2 threads.</li>
          <li>Buffer Cache uses memory; disk cache and folder cache use drive space. Each must be configured separately.</li>
        </ul>
        <Help>
          <ExternalLink href="https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md">Full Setup and Tuning Guide</ExternalLink>
        </Help>
      </Disclosure>
    </div>
  );
}
