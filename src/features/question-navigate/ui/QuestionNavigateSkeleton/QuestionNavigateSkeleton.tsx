import { Card, Skeleton } from '@/shared/ui';
import styles from './QuestionNavigateSkeleton.module.css';

export const QuestionNavigateSkeleton = () => {
  return (
    <Card className={styles.card}>
      <Skeleton width={120} height={20} />
      <Skeleton width={120} height={20} />
    </Card>
  );
};
