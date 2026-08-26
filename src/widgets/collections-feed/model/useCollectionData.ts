import { useGetPublicCollectionsQuery } from '@/entities';
import { useQueryParams } from '@/shared/lib';
import { useCallback, useMemo } from 'react';

export const useCollectionData = () => {
  const { params, setQueryParams } = useQueryParams();

  const { data, isLoading } = useGetPublicCollectionsQuery({
    page: params.page,
    specializations: params.specializations,
    isFree: params.isFree,
    titleOrDescriptionSearch: params.titleOrDescriptionSearch,
  });

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
    data: data?.data ?? [],
    isLoading,
    totalPages: totalPages,
    page: params.page,
    onPageChange: handleChangePage,
  };
};
