import { CollectionItemSkeleton, CollectionList } from '@/entities';
import { FiltersResetButton, SidebarToggle } from '@/features';
import { Pagination } from '@/features/pagination';
import { Card } from '@/shared/ui/Card';
import { EmptyState } from '@/shared/ui/EmptyState';
import { useCollectionData } from '../model';

export const CollectionsFeedWidget = () => {
  const { data, isLoading, onPageChange, page, totalPages } = useCollectionData();

  const render = () => {
    if (isLoading) {
      return <CollectionItemSkeleton count={5} />;
    }

    if (data.length === 0) {
      return (
        <EmptyState
          title="К сожалению, по запросу ничего не найдено."
          description="Попробуйте изменить запрос или воспользуйтесь нашими категориями."
          action={<FiltersResetButton />}
        />
      );
    }

    return (
      <>
        <CollectionList items={data} />
        <Pagination currentPage={page} onPageChange={onPageChange} totalPages={totalPages} />
      </>
    );
  };

  return (
    <Card title="Коллекции" action={<SidebarToggle type="side" />}>
      {render()}
    </Card>
  );
};
