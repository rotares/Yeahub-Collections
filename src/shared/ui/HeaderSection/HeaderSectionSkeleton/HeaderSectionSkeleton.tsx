import { Card } from '../../Card';
import { Skeleton } from '../../Skeleton';
import styles from './HeaderSectionSkeleton.module.css';

export const HeaderSectionSkeleton = () => {
  return (
    <Card className={styles.content}>
      <Skeleton variant="rectangular" className={styles.image} />
      <div className={styles.mainContent}>
        <Skeleton variant="text" width="60%" height="24px" />
        <Skeleton variant="rectangular" width="100%" height="60px" />
      </div>
    </Card>
  );
};
