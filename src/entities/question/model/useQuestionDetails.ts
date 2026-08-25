import { useGetPublicQuestionsQuery, useGetQuestionByIdQuery } from '@/entities';

export const useQuestionDetails = (page: number, questionId: number, collectionId: number) => {
  const { questionFromCache, isQuestionsLoading } = useGetPublicQuestionsQuery(
    { collection: collectionId, page: page },
    {
      selectFromResult: ({ data, isLoading }) => ({
        questionFromCache: data?.data.find((q) => q.id === questionId),
        isQuestionsLoading: isLoading,
      }),
    },
  );

  console.log(questionFromCache);

  const { data: questionFromApi, isLoading: isQuestionByIdLoading } = useGetQuestionByIdQuery(
    questionId,
    {
      skip: Boolean(questionFromCache),
    },
  );

  const question = questionFromCache ?? questionFromApi;
  const isLoading = !question && (isQuestionsLoading || isQuestionByIdLoading);

  return {
    question,
    isLoading,
  };
};
