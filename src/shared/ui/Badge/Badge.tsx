import clsx from 'clsx';
import styles from './Badge.module.css';

type BadgeProps = {
  type?: 'green' | 'keyword';
  text: string;
};

export const Badge = ({ text, type = 'green' }: BadgeProps) => {
  return (
    <div className={clsx(styles.badge, type === 'green' ? styles.green : styles.keyword)}>
      {text}
    </div>
  );
};
