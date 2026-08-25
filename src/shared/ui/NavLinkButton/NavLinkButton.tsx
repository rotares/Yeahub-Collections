import clsx from 'clsx';
import type { ReactNode } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';
import styles from './NavLinkButton.module.css';

export type IconSide = 'left' | 'right';

export interface NavLinkButtonProps extends Omit<NavLinkProps, 'children'> {
  children: ReactNode;
  icon?: ReactNode;
  iconSide?: IconSide;
  className?: string;
}

export const NavLinkButton = ({
  children,
  icon,
  iconSide = 'left',
  className = '',
  ...props
}: NavLinkButtonProps) => {
  return (
    <NavLink
      className={({ isActive }) => clsx(styles.button, isActive && styles.active, className)}
      {...props}
    >
      {iconSide === 'left' && icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {iconSide === 'right' && icon && <span className={styles.icon}>{icon}</span>}
    </NavLink>
  );
};
