import { useGetPublicQuestionsQuery, usePrefetchQuestions } from '@/entities';
import { useEffect } from 'react';
import { useGetNavigationHandlers } from './useGetNavigationHandlers';

export const useQuestionNavigation = ({
  collectionId,
  currentQuestionId,
  currentPage,
}: {
  collectionId: number;
  currentQuestionId: number;
  currentPage: number;
}) => {
  const { questions, totalPages } = useGetPublicQuestionsQuery(
    {
      page: currentPage,
      collection: collectionId,
    },
    {
      selectFromResult: ({ data }) => ({
        questions: data?.data ?? [],
        totalPages: data ? Math.ceil(data.total / data.limit) : 1,
      }),
    },
  );

  const prefetchQuestions = usePrefetchQuestions('getPublicQuestions');

  const currentIndex = questions.findIndex((q) => q.id === currentQuestionId);

  const { handleNext, handlePrev } = useGetNavigationHandlers({
    currentIndex,
    questions,
    currentPage,
    collectionId,
    totalPages,
  });

  useEffect(() => {
    if (questions.length === 0) return;

    if (currentIndex === questions.length - 1 && currentPage < totalPages) {
      prefetchQuestions({ page: currentPage + 1, collection: collectionId });
    }

    if (currentIndex === 0 && currentPage > 1) {
      prefetchQuestions({ page: currentPage - 1, collection: collectionId });
    }
  }, [currentIndex, questions.length, currentPage, totalPages, collectionId, prefetchQuestions]);

  return {
    handleNext,
    handlePrev,
    hasNext: currentIndex < questions.length - 1 || currentPage < totalPages,
    hasPrev: currentIndex > 0 || currentPage > 1,
  };
};
