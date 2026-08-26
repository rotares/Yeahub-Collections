import { useAppStore } from '@/app/store';
import { selectCachedQuestions } from '@/entities';
import type { QuestionDto } from '@/shared/api';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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

      const nextPageQuestions = selectCachedQuestions(collectionId, nextPage)(store.getState());

      const questionId = nextPageQuestions[0]?.id;

      if (!questionId) {
        return;
      }

      navigate({
        pathname: `/collections/${collectionId}/${questionId}`,
        search: `?page=${nextPage}`,
      });
    }
  }, [collectionId, currentIndex, currentPage, questions, navigate, totalPages, store]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      const prevQuestion = questions[currentIndex - 1];
      navigate(`/collections/${collectionId}/${prevQuestion.id}?page=${currentPage}`);
    } else if (currentPage > 1) {
      const prevPage = currentPage - 1;

      const prevPageQuestions = selectCachedQuestions(collectionId, prevPage)(store.getState());
      const questionId = prevPageQuestions[prevPageQuestions.length - 1]?.id;

      if (!questionId) {
        return;
      }

      navigate({
        pathname: `/collections/${collectionId}/${questionId}`,
        search: `?page=${prevPage}`,
      });
    }
  }, [collectionId, currentIndex, currentPage, questions, navigate, store]);

  return {
    handleNext,
    handlePrev,
  };
};
