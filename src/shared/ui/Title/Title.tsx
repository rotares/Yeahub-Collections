import type { ReactNode } from 'react';
import styles from './Title.module.css';

type Props = {
  type: 'big' | 'common';
  title: ReactNode;
};

export const Title = ({ type, title }: Props) => {
  return <p className={styles[type]}>{title}</p>;
};
