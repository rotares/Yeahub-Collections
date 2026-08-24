import type { ReactNode } from 'react';
import { Card } from '../Card';
import { Title } from '../Title';
import styles from './HeaderSection.module.css';

type HeaderSectionProps = {
  image?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export const HeaderSection = ({ image, title, action, description }: HeaderSectionProps) => {
  return (
    <>
      <Card className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <Title type="big" title={title} />
            {action}
          </div>

          {description && <p className={styles.description}>{description}</p>}
        </div>

        {image && (
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={image} />
          </div>
        )}
      </Card>
    </>
  );
};
