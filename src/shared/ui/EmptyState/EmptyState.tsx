import type { ReactNode } from 'react';
import { Card } from '../Card';
import styles from './EmptyState.module.css';

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
};

export const EmptyState = ({ title, description, action, icon }: EmptyStateProps) => (
  <Card className={styles.empty}>
    {icon}
    <p className={styles.title}>{title}</p>
    {description && <p className={styles.description}>{description}</p>}
    {action}
  </Card>
);
