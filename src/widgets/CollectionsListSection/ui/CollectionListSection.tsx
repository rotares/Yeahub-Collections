import { CollectionList } from '@/entities';
import { FiltersResetButton, SidebarToggle } from '@/features';
import { Pagination } from '@/features/pagination';
import { Card } from '../../../shared/ui/Card';
import { useCollectionData } from '../model';
import styles from './CollectionListSection.module.css';
export const CollectionListSection = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();

  if (!data || isLoading) {
    return <div>download</div>;
  }

  return (
    <Card title="Коллекции" action={<SidebarToggle type="side" />}>
      {data.length === 0 ? (
        <div className={styles.empty}>
          <span>К сожалению, по запросу ничего не найдено.</span>
          <span>Попробуйте изменить запрос или воспользуйтесь нашими категориями.</span>
          <FiltersResetButton />
        </div>
      ) : (
        <>
          <CollectionList items={data} />
          <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages!} />
        </>
      )}
    </Card>
  );
};
