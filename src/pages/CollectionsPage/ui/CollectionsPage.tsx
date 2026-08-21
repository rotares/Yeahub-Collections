import { CollectionList } from '@/entities';
import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { useUiContext } from '@/shared/lib/hooks';
import { Card } from '@/shared/ui/Card';
import { FilterBar } from '@/shared/ui/FilterBar';
import { Pagination } from '@/shared/ui/Pagintation';
import { useCollectionData } from '../api';
import styles from './CollectionsPage.module.css';

export const CollectionsPage = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();
  const { toggleDrawer } = useUiContext();

  if (!data || isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <>
      <section className={styles.main}>
        <Card className={styles.content}>
          <CollectionList items={data} />
          <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages!} />
        </Card>
        <FilterBar>
          <CollectionSearchInput />
          <SpecializationFilter />
          <AccessFilter />
        </FilterBar>
      </section>
      <button onClick={() => toggleDrawer('side')}>123</button>
    </>
  );
};
