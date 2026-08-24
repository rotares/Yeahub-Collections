import { FilterBar } from '@/shared/ui/FilterBar';
import { PageLayout } from '@/shared/ui/PageLayout';
import { CollectionQuestionsListSection } from '@/widgets';
import { Navigate, useParams } from 'react-router-dom';
import { CollectionAsideContainer } from './CollectionAsideContainer';
import { CollectionHeader } from './CollectionHeader';

export const CollectionDetailsPage = () => {
  const { collectionId } = useParams();

  if (!collectionId) {
    return <Navigate to="/collections" replace={true} />;
  }

  return (
    <>
      <PageLayout>
        <PageLayout.Content>
          <CollectionHeader collectionId={collectionId} />
          <CollectionQuestionsListSection collectionId={collectionId} />
        </PageLayout.Content>

        <PageLayout.Aside>
          <FilterBar>
            <CollectionAsideContainer collectionId={collectionId} />
          </FilterBar>
        </PageLayout.Aside>
      </PageLayout>
    </>
  );
};
