import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation } = api;
