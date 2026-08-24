import type { ReactNode } from 'react';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  children: ReactNode;
};

type PageLayoutContentProps = {
  children: ReactNode;
  className?: string;
};

type PageLayoutAsideProps = {
  children: ReactNode;
};

const PageLayoutRoot = ({ children }: PageLayoutProps) => {
  return <div className={styles.page}>{children}</div>;
};

const Content = ({ children, className = '' }: PageLayoutContentProps) => {
  return <div className={styles.content}>{children}</div>;
};

const Aside = ({ children }: PageLayoutAsideProps) => {
  return children;
};

export const PageLayout = Object.assign(PageLayoutRoot, {
  Content,
  Aside,
});
