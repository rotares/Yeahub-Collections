import { type CollectionDto } from '@/shared/api/types/';
import { useCallback } from 'react';
import { CollectionItem } from './CollectionItem';
interface CollectionListProps {
  items: CollectionDto[];
}
export const CollectionList = ({ items }: CollectionListProps) => {
  const handleClick = useCallback((id: number) => {
    console.log(id);
  }, []);

  return items.map((item) => <CollectionItem item={item} key={item.id} onClick={handleClick} />);
};
