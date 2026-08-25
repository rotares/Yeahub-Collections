import { useQueryParams } from '@/shared/lib/hooks';
import { PageBackButton } from '@/shared/ui/PageBackButton';
import { PageLayout } from '@/shared/ui/PageLayout';
import { QuestionAsideWidget, QuestionContentWidget, QuestionHeaderWidget } from '@/widgets';
import { Navigate, useParams } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

export const QuestionDetailsPage = () => {
  const { questionId, collectionId } = useParams();
  const { params } = useQueryParams();

  const numericQuestionId = Number(questionId);
  const numericCollectionId = Number(collectionId);

  if (
    !questionId ||
    !collectionId ||
    Number.isNaN(numericQuestionId) ||
    Number.isNaN(numericCollectionId)
  ) {
    return <Navigate to={'/collections'} replace />;
  }

  return (
    <>
      <PageBackButton collectionId={collectionId} />
      <PageLayout>
        <PageLayout.Content>
          <QuestionHeaderWidget
            page={params.page}
            questionId={numericQuestionId}
            collectionId={numericCollectionId}
          />
          <QuestionContentWidget
            collectionId={numericCollectionId}
            page={params.page}
            questionId={numericQuestionId}
          />
        </PageLayout.Content>

        <PageLayout.Aside>
          <QuestionAsideWidget
            page={params.page}
            collectionId={numericCollectionId}
            questionId={numericQuestionId}
          />
        </PageLayout.Aside>
      </PageLayout>

      <ScrollRestoration />
    </>
  );
};
