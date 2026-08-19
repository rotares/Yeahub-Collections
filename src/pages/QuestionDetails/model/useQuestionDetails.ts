import { useGetPublicQuestionsQuery, useGetQuestionByIdQuery } from '@/entities';
import { useQueryParams } from '@/shared/lib/query-params';
import { isValidIdCheck } from './../../CollectionDetails/utils/isValidIdCheck';

export const useQuestionDetails = (questionId?: string, collectionId?: string) => {
  const { params } = useQueryParams();

  const { id: qId, isValid: isValidQuestionId } = isValidIdCheck(questionId);
  const { id: cId, isValid: isValidCollectionId } = isValidIdCheck(collectionId);

  const { questionFromCache, isQuestionsLoading } = useGetPublicQuestionsQuery(
    { collection: cId, page: params.page },
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
