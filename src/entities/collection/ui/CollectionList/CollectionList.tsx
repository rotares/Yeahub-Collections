import { type CollectionDto } from '@/shared/api';
import { CollectionItem } from '../CollectionItem';
import styles from './CollectionList.module.css';
interface CollectionListProps {
  items: CollectionDto[];
}

export const CollectionList = ({ items }: CollectionListProps) => {
  return (
    <div className={styles.list}>
      {items.map(({ id, isFree, keywords, questionsCount, title, specializations }) => (
        <CollectionItem
          id={id}
          isFree={isFree}
          keywords={keywords}
          questionsCount={questionsCount}
          title={title}
          specializations={specializations}
          key={id}
        />
      ))}
    </div>
  );
};
