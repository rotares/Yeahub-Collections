import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { FilterBar } from '@/shared/ui/FilterBar';
import { CollectionListSection } from '@/widgets';
import { PageLayout } from '@/shared/ui/PageLayout';

export const CollectionsPage = () => {
  return (
    <PageLayout>
      <CollectionListSection />
      <FilterBar>
        <CollectionSearchInput />
        <SpecializationFilter />
        <AccessFilter />
      </FilterBar>
    </PageLayout>
  );
};
