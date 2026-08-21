import { type ReactNode } from 'react';
import { Card } from '../Card';
import style from './Aside.module.css';

type Props = {
  children: ReactNode;
};

export const Aside = ({ children }: Props) => {
  return (
    <aside className={style.aside}>
      <Card>{children}</Card>
    </aside>
  );
};
