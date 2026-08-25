import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { FilterBar } from '@/shared/ui/FilterBar';
import { PageLayout } from '@/shared/ui/PageLayout';
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
