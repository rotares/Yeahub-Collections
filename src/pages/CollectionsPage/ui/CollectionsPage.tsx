import { CollectionList } from '@/entities';
import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { Card } from '@/shared/ui/Card';
import { Pagination } from '@/shared/ui/Pagintation';
import { SidebarLayout } from '@/shared/ui/SidebarLayout';
import { useCollectionData } from '../api';
import styles from './CollectionsPage.module.css';

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
