import { collectionsQuerySchema, useGetPublicCollectionsQuery } from '@/entities';
import { type GetPublicCollectionsParams } from '@/shared/api/types';
import { useQueryParams } from '@/shared/lib/query-params/useQueryParams';

export const useCollectionData = () => {
  const { params } = useQueryParams<GetPublicCollectionsParams>(collectionsQuerySchema);

  const { data, isLoading } = useGetPublicCollectionsQuery({
    page: params.page,
    specializations: params.specializations,
    isFree: params.isFree,
    titleOrDescriptionSearch: params.titleOrDescriptionSearch,
  });

  return {
    data: data?.data,
    isLoading,
  };
};
