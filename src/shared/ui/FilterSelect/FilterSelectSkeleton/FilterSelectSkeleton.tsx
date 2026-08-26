import { Skeleton } from '@/shared/ui';
import styles from './FilterSelectSkeleton.module.css';

type FilterSelectSkeletonProps = {
  chipsCount?: number;
};

const CHIP_WIDTHS = [88, 60, 109, 80, 95, 115];

export const FilterSelectSkeleton = ({ chipsCount = 4 }: FilterSelectSkeletonProps) => {
  return (
    <div className={styles.container} aria-hidden="true">
      <Skeleton variant="text" width={110} height={20} className={styles.title} />
      <div className={styles.chipsGroup}>
        {Array.from({ length: chipsCount }).map((_, index) => {
          const width = CHIP_WIDTHS[index % CHIP_WIDTHS.length];
          return (
            <Skeleton
              key={index}
              variant="rectangular"
              width={width}
              height={36}
              className={styles.chip}
            />
          );
        })}
      </div>
    </div>
  );
};
