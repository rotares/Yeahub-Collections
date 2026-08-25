import type { ReactNode } from 'react';
import { Card } from '../Card';
import { Title } from '../Title';
import styles from './HeaderSection.module.css';
import { HeaderSectionSkeleton } from './HeaderSectionSkeleton/HeaderSectionSkeleton';

type HeaderSectionProps = {
  image?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  isLoading: boolean;
};

export const HeaderSection = ({
  image,
  title,
  action,
  description,
  isLoading = false,
}: HeaderSectionProps) => {
  if (isLoading) {
    return <HeaderSectionSkeleton />;
  }
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
