import { type CollectionDto } from '@/shared/api/types/';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollectionItem } from './CollectionItem';
interface CollectionListProps {
  items: CollectionDto[];
}
export const CollectionList = ({ items }: CollectionListProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      console.log(id);
      navigate(`/collections/${id}`);
    },
    [navigate],
  );

  return (
    <div>
      {items.map((item) => (
        <CollectionItem item={item} key={item.id} onClick={handleClick} />
      ))}
    </div>
  );
};
