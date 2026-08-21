import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { useUiContext } from '@/shared/lib/hooks';
import { FilterBar } from '@/shared/ui/FilterBar';
import { CollectionListSection } from '@/widgets';
import { PageLayout } from '@/shared/ui/PageLayout';

export const CollectionsPage = () => {
  // const { toggleDrawer } = useUiContext();

  return (
    <PageLayout>
      <div>
        <CollectionListSection />
      </div>
      <FilterBar>
        <CollectionSearchInput />
        <SpecializationFilter />
        <AccessFilter />
      </FilterBar>
    </PageLayout>
  );
};
