import { api } from "..";

// Comments Api CreateApi
export const commentsApi = api
  .enhanceEndpoints({
    addTagTypes: ["Comment"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getComments: builder.query({
        query: (blockId) => ({
          url: "/comments",
          params: { blockId },
        }),
      }),
      getCommentsById: builder.query({
        query: (id) => ({
          url: `/comments/${id}`,
        }),
      }),
      // Mutation
      createComment: builder.mutation({
        query: (args) => ({
          url: "/comments",
          method: "POST",
          body: args,
        }),
      }),
      updateCommentById: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/comments/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteCommentById: builder.mutation({
        query: (id) => ({
          url: `/comments/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useLazyGetCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentByIdMutation,
} = commentsApi;
