import clsx from 'clsx';
import styles from './DropdownArrow.module.css';

export const DropdownArrow = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={clsx(styles.arrow, isActive && styles.active)}
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.833008 0.833496L6.83301 6.8335L12.833 0.833496" stroke="#6A0BFF" />
      </svg>
    </div>
  );
};
