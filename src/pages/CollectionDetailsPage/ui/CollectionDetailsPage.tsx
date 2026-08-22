import { FilterBar } from '@/shared/ui/FilterBar';
import { PageLayout } from '@/shared/ui/PageLayout';
import { CollectionQuestionsListSection } from '@/widgets';
import { Navigate, useParams } from 'react-router-dom';
import { CollectionAsideContainer } from './CollectionAsideContainer';
import styles from './CollectionDetailsPage.module.css';
import { CollectionHeader } from './CollectionHeader';
export const CollectionDetailsPage = () => {
  const { collectionId } = useParams();

  if (!collectionId) {
    return <Navigate to="/collections" replace={true} />;
  }

  return (
    <>
      <PageLayout>
        <div className={styles.flexCol}>
          <CollectionHeader collectionId={collectionId} />

          <PageLayout.Content>
            <PageLayout.Header divider title="Список вопросов" />
            <CollectionQuestionsListSection collectionId={collectionId} />
          </PageLayout.Content>
        </div>

        <PageLayout.Aside>
          <FilterBar>
            <CollectionAsideContainer collectionId={collectionId} />
          </FilterBar>
        </PageLayout.Aside>
      </PageLayout>
    </>
  );
};
