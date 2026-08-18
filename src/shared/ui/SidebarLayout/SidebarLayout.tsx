import type { ReactNode } from 'react';
import { Card } from '../Card';
import styles from './SidebarLayout.module.css';

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <aside className={styles.sidebar}>
      <Card>{children}</Card>
    </aside>
  );
};
