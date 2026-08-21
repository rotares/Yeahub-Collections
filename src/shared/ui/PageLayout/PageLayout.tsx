import type { ReactNode } from 'react';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <section className={styles.page}>{children}</section>;
};
