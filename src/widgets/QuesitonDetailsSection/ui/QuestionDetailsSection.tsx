import { QuestionLongAnswer } from '@/entities';
import { QuestionNavigate } from '@/features';
import { Card } from '@/shared/ui/Card';
import { FormattedAnswer } from '@/shared/ui/FormattedAnswer';
import { useQuestionDetails } from '../model';
export const QuestionDetailsSection = ({
  questionId,
  collectionId,
  page,
}: {
  questionId: string;
  collectionId: string;
  page: number;
}) => {
  const { isLoading, question } = useQuestionDetails(page, questionId, collectionId);

  if (isLoading || !question) {
    return 'Загрузка';
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
