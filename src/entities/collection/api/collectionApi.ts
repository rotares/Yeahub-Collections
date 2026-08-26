import type { CollectionDto, GetPublicCollectionsParams, PaginatedResponse } from '@/shared/api';
import { baseApi } from '@/shared/api/baseApi';

export const collectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicCollections: builder.query<
      PaginatedResponse<CollectionDto>,
      GetPublicCollectionsParams
    >({
      query: (params) => {
        const { specializations, page = 1, limit = 10, ...restParams } = params;
        return {
          url: 'collections/public',
          params: {
            page,
            limit,
            ...restParams,
            ...(specializations?.length && {
              specializations: specializations.join(','),
            }),
          },
        };
      },
      providesTags: (_res, _err, args) => [{ type: 'Collection', id: args.page }],
    }),
    getCollectionById: builder.query<CollectionDto, number>({
      query: (id) => `collections/${id}/public`,
      providesTags: (_result, _error, id) => [{ type: 'Collection', id }],
    }),
  }),
});

export const { useGetPublicCollectionsQuery, useGetCollectionByIdQuery } = collectionApi;
