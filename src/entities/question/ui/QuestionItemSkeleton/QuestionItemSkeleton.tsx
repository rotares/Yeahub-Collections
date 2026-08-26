import { Card, Skeleton } from '@/shared/ui';
import styles from './QuestionItemSkeleton.module.css';

export const QuestionItemSkeleton = ({ count = 1 }: { count?: number }) => {
  const renderItem = (key: number) => (
    <Card key={key} className={styles.card}>
      <Skeleton className={styles.dot} width={10} height={10} variant="circular" />
      <Skeleton height={25} width={'80%'} variant="text" />
    </Card>
  );

  if (count > 1) return Array.from({ length: count }).map((_, i) => renderItem(i));

  return renderItem(count);
};
