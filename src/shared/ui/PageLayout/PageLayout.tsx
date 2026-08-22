import type { ReactNode } from 'react';
import { Card } from '../Card';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  children: ReactNode;
};

type PageLayoutContentProps = {
  children: ReactNode;
};

type PageLayoutHeaderProps = {
  title: string;
  action?: ReactNode;
  divider: boolean;
};

type PageLayoutAsideProps = {
  children: ReactNode;
};

const PageLayoutRoot = ({ children }: PageLayoutProps) => {
  return <div className={styles.page}>{children}</div>;
};

const Content = ({ children }: PageLayoutContentProps) => {
  return (
    <div className={styles.content}>
      <Card className={styles.card}>{children}</Card>
    </div>
  );
};

const Header = ({ title, action, divider = true }: PageLayoutHeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {action}
      </div>
      {divider && <div className={styles.divider}></div>}
    </>
  );
};

const Aside = ({ children }: PageLayoutAsideProps) => {
  return children;
};

export const PageLayout = Object.assign(PageLayoutRoot, {
  Content,
  Header,
  Aside,
});
