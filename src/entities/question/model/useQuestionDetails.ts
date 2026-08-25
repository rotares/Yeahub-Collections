import { useGetPublicQuestionsQuery, useGetQuestionByIdQuery } from '@/entities';

export const useQuestionDetails = (page: number, questionId: number, collectionId: number) => {
  const {
    questionFromCache,
    isQuestionsLoading,
    isError: isErrorPublic,
  } = useGetPublicQuestionsQuery(
    { collection: collectionId, page: page },
    {
      selectFromResult: ({ data, isLoading, isError }) => ({
        questionFromCache: data?.data.find((q) => q.id === questionId),
        isQuestionsLoading: isLoading,
        isError,
      }),
    },
  );

  const {
    data: questionFromApi,
    isLoading: isQuestionByIdLoading,
    isError: isErrorById,
  } = useGetQuestionByIdQuery(questionId, {
    skip: Boolean(questionFromCache),
  });

  const question = questionFromCache ?? questionFromApi;
  const isLoading = !question && (isQuestionsLoading || isQuestionByIdLoading);

  return {
    question,
    isLoading,
    isError: isErrorPublic || isErrorById,
  };
};
