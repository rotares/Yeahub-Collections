import {
  AccessFilter,
  CollectionSearchInput,
  SidebarToggle,
  SpecializationFilter,
} from '@/features';
import { FilterBar } from '@/shared/ui/FilterBar';
import { PageLayout } from '@/shared/ui/PageLayout';
import { CollectionListSection } from '@/widgets';

export const CollectionsPage = () => {
  return (
    <PageLayout>
      <PageLayout.Content>
        <PageLayout.Header divider title="Коллекции" action={<SidebarToggle type="side" />} />
        <CollectionListSection />
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
