import { useGetPublicQuestionsQuery } from '@/entities';
import { useQueryParams } from '@/shared/lib/query-params';
import { useCallback, useMemo } from 'react';
import { isValidIdCheck } from '../utils';

export const useCollectionQuestions = (collectionId: string | undefined) => {
  const { params, setQueryParams } = useQueryParams();

  const { isValid, id } = isValidIdCheck(collectionId);

  const { data, isLoading } = useGetPublicQuestionsQuery(
    {
      page: params.page,
      collection: id,
      limit: 1,
    },
    {
      skip: !isValid,
    },
  );

  const total = data?.total ?? 1;

  //hardcoded
  const limit = 1;

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
