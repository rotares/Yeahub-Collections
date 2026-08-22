import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './InfoBlock.module.css';

interface InfoBlockProps {
  title: string;
  children: ReactNode;
  type?: 'row' | 'column';
}

export const InfoBlock = ({ title, children, type = 'column' }: InfoBlockProps) => {
  return (
    <div className={clsx(styles.main, type === 'column' ? styles.column : styles.row)}>
      <p className={styles.title}>{title}</p>
      <div className={styles.filterWrapper}>{children}</div>
    </div>
  );
};
