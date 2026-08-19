import { useGetPublicQuestionsQuery, usePrefetchQuestions } from '@/entities';
import { useGetNavigationHandlers } from './useGetNavigationHandlers';
import { useEffect } from 'react';

export const useQuestionNavigation = ({
  collectionId,
  currentQuestionId,
  currentPage,
}: {
  collectionId: number;
  currentQuestionId: number;
  currentPage: number;
}) => {
  const { data } = useGetPublicQuestionsQuery({
    page: currentPage,
    collection: collectionId,
  });

  const prefetchQuestions = usePrefetchQuestions('getPublicQuestions');

  const questions = data?.data ?? [];
  const currentIndex = questions.findIndex((q) => q.id === currentQuestionId);
  const totalPages = data?.total && data?.limit ? Math.ceil(data.total / data.limit) : 1;

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
