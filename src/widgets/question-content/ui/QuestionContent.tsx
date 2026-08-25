import { QuestionAnswerSkeleton, QuestionLongAnswer, useQuestionDetails } from '@/entities';
import { QuestionNavigate, QuestionNavigateSkeleton } from '@/features';
import { Card } from '@/shared/ui/Card';
import { FormattedAnswer } from '@/shared/ui/FormattedAnswer';
import { Navigate } from 'react-router-dom';
export const QuestionContentWidget = ({
  questionId,
  collectionId,
  page,
}: {
  questionId: number;
  collectionId: number;
  page: number;
}) => {
  const { isLoading, question, isError } = useQuestionDetails(page, questionId, collectionId);

  if (isError) {
    return <Navigate to={'/collections'} replace />;
  }

  if (isLoading || !question) {
    return (
      <>
        <QuestionNavigateSkeleton />
        <QuestionAnswerSkeleton count={2} />
      </>
    );
  }

  return (
    <>
      <Card>
        <QuestionNavigate collectionId={collectionId} questionId={questionId} currentPage={page} />
      </Card>

      <Card title="Краткий ответ">
        <FormattedAnswer text={question.shortAnswer} />
      </Card>

      <Card title="Развернутый ответ">
        <QuestionLongAnswer key={questionId} text={question.longAnswer} />
      </Card>
    </>
  );
};
