import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_URL;

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.yeatwork.ru/',
  }),
  tagTypes: ['Collection', 'Question', 'Specialization'],
  endpoints: () => ({}),
});
export default baseApi.reducer;
