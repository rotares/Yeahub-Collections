import { Pagination } from '@/shared/ui/Pagintation';
import { useCollectionData } from '../model';
import { Card } from '@/shared/ui/Card';
import { CollectionList } from '@/entities';
import styles from './CollectionListSection.module.css';

export const CollectionListSection = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();

  if (!data || isLoading) {
    return <div>download</div>;
  }

  return (
    <Card className={styles.content}>
      <CollectionList items={data} />
      <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages!} />
    </Card>
  );
};
