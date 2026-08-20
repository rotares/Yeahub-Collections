import { Card } from '@/shared/ui/Card';
import { clsx } from 'clsx';
import { type ReactNode, type RefObject } from 'react';
import styles from './SidebarDrawer.module.css';

type Props = {
  isOpen: boolean;
  ref: RefObject<HTMLElement | null>;
  children: ReactNode;
};

export const SidebarDrawer = ({ children, ref, isOpen }: Props) => {
  return (
    <aside ref={ref} className={clsx(styles.sidebarDrawer, isOpen && styles.open)}>
      <Card className={styles.card}>{children}</Card>
    </aside>
  );
};
