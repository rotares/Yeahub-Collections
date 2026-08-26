import { useGetCollectionByIdQuery } from '@/entities';
import { SidebarToggle } from '@/features';
import CollectionImg from '@/shared/assets/Collection.jpg';
import { HeaderSection } from '@/shared/ui';
import { memo } from 'react';

export const CollectionDetailsHeaderWidget = memo(({ collectionId }: { collectionId: number }) => {
  const { data, isLoading } = useGetCollectionByIdQuery(collectionId);

  return (
    <HeaderSection
      title={data?.title}
      description={data?.description}
      image={CollectionImg}
      action={<SidebarToggle type="side" />}
      isLoading={isLoading}
    />
  );
});

CollectionDetailsHeaderWidget.displayName = 'CollectionHeader';
