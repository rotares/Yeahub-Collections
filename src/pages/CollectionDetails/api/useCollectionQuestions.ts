import { useQueryParams } from '@/shared/lib/query-params';
import { isValidIdCheck } from '../utils';
import { useGetPublicQuestionsQuery } from '@/entities';
import { useMemo, useCallback } from 'react';

export const useCollectionQuestions = (collectionId: string | undefined) => {
  const { params, setQueryParams } = useQueryParams();

  const { isValid, id } = isValidIdCheck(collectionId);

  const { data, isLoading } = useGetPublicQuestionsQuery(
    {
      page: params.page,
      collection: id,
      limit: params.limit,
    },
    {
      skip: !isValid,
    },
  );

  const total = data?.total ?? 1;
  const limit = data?.limit || params.limit;

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
