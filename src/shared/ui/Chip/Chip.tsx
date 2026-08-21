import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './Chip.module.css';

type ChipProps = {
  type?: 'static' | 'default';
  isActive?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export const Chip = ({ children, type = 'default', isActive = false, onClick }: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        styles.chip,
        isActive && styles.active,
        type === 'default' ? styles.default : styles.static,
      )}
    >
      {children}
    </div>
  );
};
