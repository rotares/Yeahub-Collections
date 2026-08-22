import { useGetPublicQuestionsQuery } from '@/entities';
import { useQueryParams } from '@/shared/lib/hooks';
import { isValidIdCheck } from '@/shared/lib/utils';
import { useCallback, useMemo } from 'react';

export const useCollectionQuestions = (collectionId: string | undefined) => {
  const { params, setQueryParams } = useQueryParams();

  const { isValid, id } = isValidIdCheck(collectionId);

  const { data, isLoading } = useGetPublicQuestionsQuery(
    {
      page: params.page,
      collection: id,
    },
    {
      skip: !isValid,
    },
  );

  const total = data?.total ?? 1;
  const limit = params.limit ?? data?.limit ?? 10;

  const totalPages = useMemo(() => {
    if (!total || !limit) return 0;
    return Math.ceil(total / limit);
  }, [total, limit]);

  const handleChangePage = useCallback(
    (page: number) => setQueryParams({ page }),
    [setQueryParams],
  );

  return {
    currentPage: data?.page || params.page,
    totalPages,
    handleChangePage,
    questionsData: data?.data,
    isLoadingQuestions: isLoading,
  };
};
