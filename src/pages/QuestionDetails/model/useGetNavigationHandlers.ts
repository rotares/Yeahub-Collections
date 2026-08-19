import type { QuestionDto } from '@/shared/api/types';
import { useAppStore } from '@/shared/hooks/storeHooks';
import { useNavigate } from 'react-router-dom';
import { selectCachedPageData } from '@/entities';
import { useCallback } from 'react';

type NavigationHandlerProps = {
  currentIndex: number;
  questions: QuestionDto[];
  currentPage: number;
  collectionId: number;
  totalPages: number;
};

export const useGetNavigationHandlers = ({
  currentIndex,
  questions,
  currentPage,
  collectionId,
  totalPages,
}: NavigationHandlerProps) => {
  const navigate = useNavigate();
  const store = useAppStore();

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      navigate(`/collections/${collectionId}/${nextQuestion.id}?page=${currentPage}`);
    } else if (currentPage < totalPages) {
      const nextPage = currentPage + 1;

      const selectPageData = selectCachedPageData(collectionId, nextPage);
      const cachedData = selectPageData(store.getState()).data?.data ?? [];
      const questionId = cachedData[0]?.id;

      if (!questionId) {
        return;
      }

      navigate(`/collections/${collectionId}/${questionId}?page=${nextPage}`);
    }
  }, [collectionId, currentIndex, currentPage, questions, totalPages]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      const prevQuestion = questions[currentIndex - 1];
      navigate(`/collections/${collectionId}/${prevQuestion.id}?page=${currentPage}`);
    } else if (currentPage > 1) {
      const prevPage = currentPage - 1;

      const selectPageData = selectCachedPageData(collectionId, prevPage);
      const cachedData = selectPageData(store.getState()).data?.data ?? [];
      const questionId = cachedData[cachedData.length - 1]?.id;

      if (!questionId) {
        return;
      }

      navigate(`/collections/${collectionId}/${questionId}?page=${prevPage}`);
    }
  }, [collectionId, currentIndex, currentPage, questions, totalPages]);

  return {
    handleNext,
    handlePrev,
  };
};
