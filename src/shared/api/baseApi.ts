import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.BASE_URL;

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Collection', 'Question', 'Specialization'],
  endpoints: () => ({}),
});
export default baseApi.reducer;
