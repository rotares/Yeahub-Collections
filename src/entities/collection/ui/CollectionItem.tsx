import { type CollectionDto } from '@/shared/api/types/';
import { memo } from 'react';
import { Card } from '@/shared/ui/Card';

interface CollectionItemProps {
  item: CollectionDto;
  onClick?: (id: number) => void;
}

//todo
export const CollectionItem = memo(({ item, onClick }: CollectionItemProps) => {
  return (
    <Card>
      <article onClick={() => onClick?.(item.id)}>
        {item.title}
        {item.description}
      </article>
    </Card>
  );
});
