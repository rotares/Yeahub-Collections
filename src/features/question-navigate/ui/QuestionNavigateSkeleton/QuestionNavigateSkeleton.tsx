import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './QuestionNavigateSkeleton.module.css';

export const QuestionNavigateSkeleton = () => {
  return (
    <Card className={styles.card}>
      <Skeleton width={120} height={20} />
      <Skeleton width={120} height={20} />
    </Card>
  );
};
