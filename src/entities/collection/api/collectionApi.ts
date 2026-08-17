import { baseApi } from '@/shared/api/baseApi';
import type {
  CollectionDto,
  GetPublicCollectionsParams,
  PaginatedResponse,
} from '@/shared/api/types';

export const collectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получение списка публичных коллекций с фильтрацией и пагинацией
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
            // Передаем массив специализаций через запятую или несколько query-параметров
            ...(specializations?.length && {
              specializations: specializations.join(','),
            }),
          },
        };
      },
      providesTags: (_res, _err, args) => [{ type: 'Collection', id: args.page }],
    }),
    // Получение одной коллекции по ID
    getCollectionById: builder.query<CollectionDto, number>({
      query: (id) => `collections/${id}/public`,
      providesTags: (_result, _error, id) => [{ type: 'Collection', id }],
    }),
  }),
});

export const { useGetPublicCollectionsQuery, useGetCollectionByIdQuery } = collectionApi;
