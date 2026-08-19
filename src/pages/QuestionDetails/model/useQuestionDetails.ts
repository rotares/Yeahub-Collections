import { useGetPublicQuestionsQuery, useGetQuestionByIdQuery } from '@/entities';
import { isValidIdCheck } from './../../CollectionDetails/utils/isValidIdCheck';

export const useQuestionDetails = (page: number, questionId?: string, collectionId?: string) => {
  const { id: qId, isValid: isValidQuestionId } = isValidIdCheck(questionId);
  const { id: cId, isValid: isValidCollectionId } = isValidIdCheck(collectionId);

  const { questionFromCache, isQuestionsLoading } = useGetPublicQuestionsQuery(
    { collection: cId, page: page },
    {
      selectFromResult: ({ data, isLoading }) => ({
        questionFromCache: data?.data.find((q) => q.id === qId),
        isQuestionsLoading: isLoading,
      }),
      skip: !isValidQuestionId || !isValidCollectionId,
    },
  );

  const { data: questionFromApi, isLoading: isQuestionByIdLoading } = useGetQuestionByIdQuery(qId, {
    skip: Boolean(questionFromCache) || !isValidQuestionId || !isValidCollectionId,
  });

  return {
    question: questionFromCache ?? questionFromApi,
    isLoading: !questionFromCache && (isQuestionByIdLoading || isQuestionsLoading),
  };
};
