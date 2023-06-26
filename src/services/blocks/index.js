import { api } from "..";

// Blocks Api CreateApi
export const blocksApi = api
  .enhanceEndpoints({ addTagTypes: ["Block"] })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getBlocks: builder.query({
        query: (stageId) => ({
          url: "/blocks",
          params: { stageId },
        }),
      }),
      getBlockById: builder.query({
        query: (id) => ({
          url: `/blocks/${id}`,
        }),
      }),
      // Mutation
      createBlock: builder.mutation({
        query: (args) => ({
          url: "/blocks",
          method: "POST",
          body: args,
        }),
      }),
      updateBlockById: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/blocks/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteBlockById: builder.mutation({
        query: (id) => ({
          url: `/blocks/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetBlocksQuery,
  useLazyGetBlockByIdQuery,
  useCreateBlockMutation,
  useUpdateBlockByIdMutation,
  useLazyGetBlocksQuery,
} = blocksApi;
