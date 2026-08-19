import { Navigate, useParams } from 'react-router-dom';
import { useQuestionDetails } from '../model';

export const QuestionDetails = () => {
  const { questionId, collectionId } = useParams();
  const { question, isLoading } = useQuestionDetails(questionId, collectionId);

  if (!questionId || !collectionId) {
    return <Navigate to={'/collections'} replace />;
  }

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return <div>{question?.title}</div>;
};
