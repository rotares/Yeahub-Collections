import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_URL || 'https://api.yeatwork.ru/';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['Collection', 'Question', 'Specialization'],
  endpoints: () => ({}),
});
export default baseApi.reducer;
