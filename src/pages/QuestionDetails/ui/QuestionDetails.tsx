import { useQueryParams } from '@/shared/lib/hooks';
import { FilterBar } from '@/shared/ui/FilterBar';
import { PageLayout } from '@/shared/ui/PageLayout';
import { QuestionDetailsSection } from '@/widgets';
import { Navigate, useParams } from 'react-router-dom';
import { PageBackButton } from '../../../shared/ui/PageBackButton';
import { QuestionAsideContainer } from './QuestionAsideContainer/QuestionAsideContainer';
import { QuestionDetailsHeader } from './QuestionDetailsHeader/QuestionDetailsHeader';

export const QuestionDetails = () => {
  const { questionId, collectionId } = useParams();
  const { params } = useQueryParams();

  if (!questionId || !collectionId) {
    return <Navigate to={'/collections'} replace />;
  }

  return (
    <>
      <PageBackButton collectionId={collectionId} />
      <PageLayout>
        <PageLayout.Content>
          <QuestionDetailsHeader
            page={params.page}
            questionId={questionId}
            collectionId={collectionId}
          />

          <QuestionDetailsSection
            collectionId={collectionId}
            page={params.page}
            questionId={questionId}
          />
        </PageLayout.Content>

        <PageLayout.Aside>
          <FilterBar>
            <QuestionAsideContainer
              collectionId={collectionId}
              page={params.page}
              questionId={questionId}
            />
          </FilterBar>
        </PageLayout.Aside>
      </PageLayout>
    </>
  );
};
