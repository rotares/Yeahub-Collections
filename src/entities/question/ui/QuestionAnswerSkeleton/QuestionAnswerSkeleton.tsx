import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './QuestionAnswerSkeleton.module.css';

type QuestionAnswerSkeleton = {
  count?: number;
};

export const QuestionAnswerSkeleton = ({ count = 1 }: QuestionAnswerSkeleton) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={`question-skeleton-${index}`} className={styles.card}>
          <Skeleton variant="text" width="22%" height={20} className={styles.shortLine} />
          <Skeleton variant="text" width="100%" height={20} className={styles.fullLine} />
          <Skeleton variant="text" width="20%" height={16} />
          <Skeleton variant="text" width="30%" height={16} />
        </Card>
      ))}
    </>
  );
};
