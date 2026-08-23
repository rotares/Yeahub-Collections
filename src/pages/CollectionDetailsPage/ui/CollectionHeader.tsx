import { SidebarToggle } from '@/features';
import CollectionImg from '@/shared/assets/Collection.jpg';
import { PageLayout } from '@/shared/ui/PageLayout';
import { memo } from 'react';
import { useCollectionDetails } from '../model';
import styles from './CollectionDetailsPage.module.css';

export const CollectionHeader = memo(({ collectionId }: { collectionId: string }) => {
  const { collectionData, isLoadingCollection } = useCollectionDetails(collectionId);

  if (isLoadingCollection || !collectionData) {
    return <div>download</div>;
  }

  return (
    <PageLayout.Content className={styles.content}>
      <div className={styles.contentHeader}>
        <PageLayout.Header
          divider={false}
          title={collectionData.title}
          action={<SidebarToggle type="side" />}
        />
        {collectionData.description}
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={CollectionImg} />
      </div>
    </PageLayout.Content>
  );
});

CollectionHeader.displayName = 'CollectionHeader';
