import { api } from "..";

// Auth Template CreateApi
export const templateApi = api
  .enhanceEndpoints({
    addTagTypes: ["Template"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getTemplates: builder.query({
        query: () => ({
          url: "/templates",
        }),
      }),
      getTemplatesById: builder.query({
        query: (templateId) => ({
          url: `/templates/${templateId}`,
        }),
      }),
      // Mutation
      createTemplate: builder.mutation({
        query: (args) => ({
          url: "/templates/available",
          method: "POST",
          body: args,
        }),
      }),
      updateTemplatePublic: builder.mutation({
        query: (id) => ({
          url: `/templates/${id}`,
          method: "POST",
        }),
      }),
      deleteTemplate: builder.mutation({
        query: (id) => ({
          url: `/templates/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetTemplatesQuery,
  useDeleteTemplateMutation,
  useCreateTemplateMutation,
  useLazyGetTemplatesByIdQuery,
} = templateApi;
