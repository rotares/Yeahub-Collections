import clsx from 'clsx';
import { memo, type ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  onClick?: () => void;
  action?: ReactNode;
}

export const Card = memo(
  ({ title, children, footer, className = '', onClick, action }: CardProps) => {
    return (
      <div onClick={onClick} className={clsx(styles.card, className)}>
        {(title || action) && (
          <div className={styles.header}>
            {title && <div className={styles.title}>{title}</div>}
            {action}
          </div>
        )}
        {children}
        {footer && <footer>{footer}</footer>}
      </div>
    );
  },
);

Card.displayName = 'Card';
