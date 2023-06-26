import { api } from "..";

// Stage Api CreateApi
export const stageApi = api
  .enhanceEndpoints({
    addTagTypes: ["Stage"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getStages: builder.query({
        query: (args) => ({
          url: "/stages",
          params: args,
        }),
      }),
      getStageById: builder.query({
        query: (id) => ({
          url: `/stages/${id}`,
        }),
      }),
      // Mutation
      createStage: builder.mutation({
        query: (args) => ({
          url: "/stages",
          method: "POST",
          body: args,
        }),
      }),
      updateStage: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/stages/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteStage: builder.mutation({
        query: (id) => ({
          url: `/stages/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetStagesQuery,
  useGetStageByIdQuery,
  useCreateStageMutation,
  useUpdateStageMutation,
  useDeleteStageMutation,
} = stageApi;
