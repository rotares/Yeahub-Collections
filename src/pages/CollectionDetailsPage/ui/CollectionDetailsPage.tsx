import { PageLayout } from '@/shared/ui/PageLayout';
import { ScrollRestoration } from 'react-router-dom';
import {
  CollectionDetailsAsideWidget,
  CollectionDetailsHeaderWidget,
  CollectionQuestionsListWidget,
} from '@/widgets';
import { Navigate, useParams } from 'react-router-dom';

export const CollectionDetailsPage = () => {
  const { collectionId } = useParams();
  const numericId = Number(collectionId);

  if (!collectionId || Number.isNaN(numericId)) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <>
      <PageLayout>
        <PageLayout.Content>
          <CollectionDetailsHeaderWidget collectionId={numericId} />
          <CollectionQuestionsListWidget collectionId={numericId} />
        </PageLayout.Content>
        <PageLayout.Aside>
          <CollectionDetailsAsideWidget collectionId={numericId} />
        </PageLayout.Aside>
      </PageLayout>
      <ScrollRestoration />
    </>
  );
};
