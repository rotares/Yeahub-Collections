import { SidebarToggle } from '@/features';
import CollectionImg from '@/shared/assets/Collection.jpg';
import { memo } from 'react';
import { HeaderSection } from '../../../shared/ui/HeaderSection';
import { useCollectionDetails } from '../model';

export const CollectionHeader = memo(({ collectionId }: { collectionId: string }) => {
  const { collectionData, isLoadingCollection } = useCollectionDetails(collectionId);

  if (isLoadingCollection || !collectionData) {
    return <div>download</div>;
  }

  return (
    <HeaderSection
      title={collectionData.title}
      description={collectionData.description}
      image={CollectionImg}
      action={<SidebarToggle type="side" />}
    />
  );
});

CollectionHeader.displayName = 'CollectionHeader';
