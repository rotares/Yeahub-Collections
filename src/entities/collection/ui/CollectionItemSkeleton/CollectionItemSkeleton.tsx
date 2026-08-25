import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './CollectionItemSkeleton.module.css';

type CollectionItemSkeletonProps = {
  count?: number;
};

export const CollectionItemSkeleton = ({ count = 1 }: CollectionItemSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className={styles.card}>
          <Skeleton variant="rectangular" className={styles.image} />

          <div className={styles.content}>
            <Skeleton variant="rectangular" width={40} height={20} className={styles.chip} />

            <Skeleton variant="text" width="30%" height={22} className={styles.title} />

            <Skeleton variant="text" width="50%" height={16} className={styles.subtitle} />

            <div className={styles.counterRow}>
              <Skeleton variant="rectangular" width={100} height={40} className={styles.icon} />
            </div>

            <Skeleton variant="text" width="50%" height={16} className={styles.role} />
          </div>
        </Card>
      ))}
    </>
  );
};
