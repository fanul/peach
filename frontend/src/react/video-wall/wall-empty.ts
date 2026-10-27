import { emptyStateHtml } from '@peach/legacy/ui';
import { unfilteredWallAddress } from './wall-route';
import { catalogEmptyHtml } from '../../catalog-onboarding';

/** 媒体库、筛选结果与封面各自表达当前的空状态。 */
export function wallEmptyHtml({ libraryEmpty, matches, hasMore, catalogEmpty }: {
  libraryEmpty: boolean; matches: number; hasMore: boolean; catalogEmpty?: string;
}): string {
  if (libraryEmpty) return catalogEmpty || catalogEmptyHtml();
  if (!matches) return emptyStateHtml('search', 'No videos match your filters', 'Clear the filters to view all videos.', {
    actions: `<a class="geist-button primary" href="${unfilteredWallAddress()}">Clear filters</a>`,
  });
  return emptyStateHtml('image', 'These videos do not have cover art yet', hasMore
    ? 'Load more videos to keep browsing.' : 'Add cover art to see these videos on the video wall.', {
    actions: '<a class="geist-button primary" href="/data-cleanup">Add cover art</a>'
      + (hasMore ? '<button type="button" class="geist-button" data-wall-load-more>Load more</button>' : ''),
  });
}
