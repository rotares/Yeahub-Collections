import { AppHeader, AppFooter } from '@/widgets';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <AppHeader />

      <main className={styles.container}>
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
};
