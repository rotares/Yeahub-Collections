import { useQueryParams } from '@/shared/lib/hooks';
import { Navigate, useParams } from 'react-router-dom';
import { useQuestionDetails } from '../model';
import { useQuestionNavigation } from '../model/useQuestionNavigation';

export const QuestionDetails = () => {
  const { questionId, collectionId } = useParams();
  const { params } = useQueryParams();

  const { question, isLoading } = useQuestionDetails(params.page, questionId, collectionId);

  const { handleNext, handlePrev } = useQuestionNavigation({
    collectionId: Number(collectionId),
    currentQuestionId: Number(questionId),
    currentPage: params.page,
  });

  if (!questionId || !collectionId) {
    return <Navigate to={'/collections'} replace />;
  }

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      {question?.title}

      <div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};
