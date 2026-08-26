import type { GetPublicQuestionsParams, PaginatedResponse, QuestionDto } from '@/shared/api';
import { baseApi } from '@/shared/api/baseApi';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<PaginatedResponse<QuestionDto>, GetPublicQuestionsParams>({
      query: (params) => ({
        url: 'questions/public-questions',
        params,
      }),
      providesTags: (_res, _err, args) => [
        { type: 'Question', id: `COLLECTION_${args.collection}_PAGE_${args.page}` },
      ],
    }),

    getQuestionById: builder.query<QuestionDto, number>({
      query: (id) => `questions/public-questions/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Question', id }],
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetQuestionByIdQuery, usePrefetch } = questionApi;
