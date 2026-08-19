import { type CollectionDto } from '@/shared/api/types/';
import { Card } from '@/shared/ui/Card';
import { memo } from 'react';

interface CollectionItemProps {
  item: CollectionDto;
  onClick?: (id: number) => void;
}

//todo
export const CollectionItem = memo(({ item, onClick }: CollectionItemProps) => {
  return (
    <Card>
      <article onClick={() => onClick?.(item.id)}>{item.title}</article>
    </Card>
  );
});
