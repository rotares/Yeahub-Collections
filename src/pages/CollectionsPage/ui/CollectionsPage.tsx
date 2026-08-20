import { CollectionList } from '@/entities';
import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { useUiContext } from '@/shared/lib/hooks';
import { Card } from '@/shared/ui/Card';
import { Pagination } from '@/shared/ui/Pagintation';
import { SidebarDrawer } from '@/shared/ui/SidebarDrawer';
import { useCollectionData } from '../api';
import styles from './CollectionsPage.module.css';

export const CollectionsPage = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();
  const { handleToggle, isOpen, ref } = useUiContext();

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
        <SidebarDrawer isOpen={isOpen} ref={ref}>
          <CollectionSearchInput />
          <SpecializationFilter />
          <AccessFilter />
        </SidebarDrawer>
      </section>

      <button onClick={handleToggle}>TOGGLE</button>
    </>
  );
};
