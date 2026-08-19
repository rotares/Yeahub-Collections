import { useGetPublicQuestionsQuery, usePrefetchQuestions } from '@/entities';
import { useNavigate } from 'react-router-dom';

export const useQuestionNavigation = ({
  collectionId,
  currentQuestionId,
  currentPage,
}: {
  collectionId: number;
  currentQuestionId: number;
  currentPage: number;
}) => {
  const navigate = useNavigate();

  const { data } = useGetPublicQuestionsQuery({
    page: currentPage,
    collection: collectionId,
  });

  const prefetchNextPage = usePrefetchQuestions('getPublicQuestions');

  const questions = data?.data ?? [];
  const currentIndex = questions.findIndex((q) => q.id === currentQuestionId);
  const totalPages = data?.total ?? 1;

  if (currentIndex === questions.length - 1 && currentPage < totalPages) {
    prefetchNextPage({ page: currentPage + 1, collection: collectionId });
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      navigate(`/collections/${collectionId}/${nextQuestion.id}?page=${currentPage}`);
    } else if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      navigate(`/collections/${collectionId}/questions/next?page=${nextPage}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevQuestion = questions[currentIndex - 1];
      navigate(`/collections/${collectionId}/${prevQuestion.id}?page=${currentPage}`);
    } else if (currentPage > 1) {
      const prevPage = currentPage - 1;
      navigate(`/collections/${collectionId}/questions/prev?page=${prevPage}`);
    }
  };

  return {
    handleNext,
    handlePrev,
    hasNext: currentIndex < questions.length - 1 || currentPage < totalPages,
    hasPrev: currentIndex > 0 || currentPage > 1,
  };
};
