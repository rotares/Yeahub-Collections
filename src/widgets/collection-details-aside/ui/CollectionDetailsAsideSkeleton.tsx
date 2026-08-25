import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './CollectionDetailsAsideSkeleton.module.css';

export const CollectionDetailsAsideSkeleton = () => {
  return (
    <>
      <div className={styles.section}>
        <Skeleton variant="text" width={70} height={16} />
        <div className={styles.row}>
          <Skeleton variant="rectangular" width={110} height={40} className={styles.pill} />
        </div>
      </div>

      <div className={styles.section}>
        <Skeleton variant="text" width={60} height={16} />
        <div className={styles.row}>
          <Skeleton variant="rectangular" width={90} height={40} className={styles.pill} />
          <Skeleton variant="rectangular" width={110} height={40} className={styles.pill} />
        </div>
      </div>

      <div className={styles.section}>
        <Skeleton variant="text" width={60} height={16} />
        <div className={styles.row}>
          <Skeleton variant="rectangular" width={90} height={40} className={styles.pill} />
          <Skeleton variant="rectangular" width={110} height={40} className={styles.pill} />
        </div>
      </div>

      <div className={styles.section}>
        <Skeleton variant="text" width={60} height={16} />
        <div className={styles.row}>
          <Skeleton variant="text" width={100} height={20} />
          <Skeleton variant="text" width={130} height={18} />
          <Skeleton variant="text" width={80} height={18} />
        </div>
      </div>

      <div className={styles.authorSection}>
        <Skeleton variant="text" width={160} height={16} />
      </div>
    </>
  );
};
