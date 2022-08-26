import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['Todos']
    })
  })
});

export const { useGetTodosQuery, useAddTodoMutation } = apiSlice;
