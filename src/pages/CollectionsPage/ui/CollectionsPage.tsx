import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { FilterBar, PageLayout } from '@/shared/ui';
import { CollectionsFeedWidget } from '@/widgets';

export const CollectionsPage = () => {
  return (
    <PageLayout>
      <PageLayout.Content>
        <CollectionsFeedWidget />
      </PageLayout.Content>

      <PageLayout.Aside>
        <FilterBar>
          <CollectionSearchInput />
          <SpecializationFilter />
          <AccessFilter />
        </FilterBar>
      </PageLayout.Aside>
    </PageLayout>
  );
};
