import clsx from 'clsx';
import { memo, type ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = memo(({ header, children, footer, className = '', onClick }: CardProps) => {
  return (
    <div onClick={onClick} className={clsx(className, styles.card)}>
      {header && <header className={styles.cardHeader}>{header}</header>}
      {children}
      {footer && <footer>{footer}</footer>}
    </div>
  );
});
