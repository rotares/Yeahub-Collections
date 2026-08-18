import { CollectionList } from '@/entities';
import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { useCollectionData } from '../api';
import { Pagination } from '@/shared/ui/Pagintation';
import styles from './CollectionsPage.module.css';
import { Card } from '@/shared/ui/Card';
import { SidebarLayout } from '@/shared/ui/SidebarLayout';

export const CollectionsPage = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();

  console.log(data);

  if (!data || isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <section className={styles.main}>
      <Card className={styles.content}>
        <CollectionList items={data} />
        <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages!} />
      </Card>
      <SidebarLayout>
        <CollectionSearchInput />
        <SpecializationFilter />
        <AccessFilter />
      </SidebarLayout>
    </section>
  );
};
