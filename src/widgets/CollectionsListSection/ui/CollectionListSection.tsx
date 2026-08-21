import { CollectionList } from '@/entities';
import { Pagination } from '@/features/pagination';
import { useCollectionData } from '../model';
import styles from './CollectionListSection.module.css';

export const CollectionListSection = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();

  if (!data || isLoading) {
    return <div>download</div>;
  }

  return (
    <div className={styles.content}>
      <CollectionList items={data} />
      <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages!} />
    </div>
  );
};
