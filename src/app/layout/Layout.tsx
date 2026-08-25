import { AppHeader } from '@/widgets';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import styles from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <AppHeader />

      <main className={styles.container}>
        <Outlet />
      </main>

      <footer>footer</footer>

      <ScrollRestoration />
    </>
  );
};
