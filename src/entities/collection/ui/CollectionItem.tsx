import { type CollectionDto } from '@/shared/api/types/';
import { memo } from 'react';

interface CollectionItemProps {
  item: CollectionDto;
  onClick?: (id: number) => void;
}

//todo
export const CollectionItem = memo(({ item, onClick }: CollectionItemProps) => {
  return (
    <article onClick={() => onClick?.(item.id)}>
      {item.title}
      {item.description}
    </article>
  );
});
