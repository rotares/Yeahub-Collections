import { useGetPublicQuestionsQuery } from '@/entities';
import { useQueryParams } from '@/shared/lib/hooks';
import { useCallback, useMemo } from 'react';

export const useCollectionQuestions = (collectionId: number) => {
  const { params, setQueryParams } = useQueryParams();

  const { data, isLoading, isError } = useGetPublicQuestionsQuery({
    page: params.page,
    collection: collectionId,
  });

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
    questionsData: data?.data || [],
    isLoadingQuestions: isLoading,
    isError,
  };
};
