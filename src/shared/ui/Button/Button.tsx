import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  type?: 'filled' | 'transparent';
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({ type = 'filled', onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.button, type === 'filled' ? styles.filled : styles.transparent)}
    >
      {children}
    </button>
  );
};
