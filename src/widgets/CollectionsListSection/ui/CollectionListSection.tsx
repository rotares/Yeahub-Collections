import { CollectionList } from '@/entities';
import { FiltersResetButton } from '@/features';
import { Pagination } from '@/features/pagination';
import { useCollectionData } from '../model';
import styles from './CollectionListSection.module.css';

export const CollectionListSection = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();

  if (!data || isLoading) {
    return <div>download</div>;
  }

  if (data.length === 0) {
    return (
      <div className={styles.empty}>
        <span>К сожалению, по запросу ничего не найдено.</span>
        <span>Попробуйте изменить запрос или воспользуйтесь нашими категориями.</span>
        <FiltersResetButton />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <CollectionList items={data} />
      <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages!} />
    </div>
  );
};
