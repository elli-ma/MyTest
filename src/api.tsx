import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Post {
  id: number
  title: string
  body: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPost: builder.query<Post, number>({
      query: (postId = 1) => `/posts/${postId}`,
    }),
  }),
})

export const { useGetPostQuery } = api
