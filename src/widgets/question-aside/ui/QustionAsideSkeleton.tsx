import { Skeleton } from '@/shared/ui';
import styles from './QuestionAsideSkeleton.module.css';

export const QustionAsideSkeleton = () => {
  return (
    <>
      <div className={styles.section}>
        <Skeleton variant="text" width={60} height={14} className={styles.label} />
        <div className={styles.row}>
          <Skeleton variant="rectangular" width={120} height={32} />
          <Skeleton variant="rectangular" width={110} height={32} />
        </div>
      </div>

      <div className={styles.section}>
        <Skeleton variant="text" width={55} height={14} className={styles.label} />
        <div className={styles.row}>
          <Skeleton variant="rectangular" width={52} height={36} />
          <Skeleton variant="rectangular" width={92} height={36} />
          <Skeleton variant="rectangular" width={78} height={36} />
        </div>
      </div>

      <div className={styles.section}>
        <Skeleton variant="text" width={110} height={14} />
        <div className={styles.row}>
          <Skeleton variant="text" width={70} height={18} />
          <Skeleton variant="text" width={85} height={18} />
        </div>
      </div>

      <Skeleton variant="text" width={110} height={16} />
    </>
  );
};
