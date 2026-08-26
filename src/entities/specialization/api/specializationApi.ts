import {
  type PaginatedResponse,
  type PaginationParams,
  type SpecializationDto,
} from '@/shared/api';
import { baseApi } from '@/shared/api/baseApi';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationDto[], PaginationParams>({
      query: (params) => {
        const { page = 1, limit = 10 } = params;
        return {
          url: '/specializations',
          params: {
            page,
            limit,
          },
        };
      },
      transformResponse: (response: PaginatedResponse<SpecializationDto>) => response.data,
      providesTags: () => [{ type: 'Specialization', id: 'LIST' }],
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
