import { SidebarToggle } from '@/features';
import { useUiContext } from '@/shared/lib';
import { Button, SidebarDrawer } from '@/shared/ui';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './AppHeader.module.css';

const NAV_ITEMS = [
  { to: '/collections', label: 'База вопросов' },
  { to: '/', label: 'Тренажер' },
  { to: '/', label: 'Материалы' },
] as const;

const NavigationList = () => {
  const { closeDrawer } = useUiContext();
  return (
    <nav>
      <ul className={styles.headerNav}>
        {NAV_ITEMS.map(({ to, label }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
              onClick={() => closeDrawer('burger')}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.logoNavWrapper}>
            <NavLink className={styles.logoWrapper as string} to={'/'}>
              <img src="/src/shared/assets/logo.png" alt="" />
              <h1>Yeahub</h1>
            </NavLink>
            <div className={styles.desktopNav}>
              <NavigationList />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button type="link">Вход</Button>
            <Button type="filled">Регистрация</Button>
          </div>
          <SidebarToggle type="burger" />
        </div>
      </div>
      <SidebarDrawer id="burger" type="burger">
        <NavigationList />
        <div className={styles.buttonMobile}>
          <Button type="link">Вход</Button>
          <Button type="filled">Регистрация</Button>
        </div>
      </SidebarDrawer>
    </header>
  );
};
