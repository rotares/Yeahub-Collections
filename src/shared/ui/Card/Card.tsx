import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const Card = ({ header, children, footer, className = '' }: CardProps) => {
  return (
    <div className={clsx(className, styles.card)}>
      {header && <header className={styles.cardHeader}>{header}</header>}
      {children}
      {footer && <footer>{header}</footer>}
    </div>
  );
};
