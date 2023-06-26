import { api } from "..";

// Project Api CreateApi
export const projectApi = api
  .enhanceEndpoints({
    addTagTypes: ["Project"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getProjectList: builder.query({
        query: (args) => ({
          url: "/projects",
          params: args,
        }),
      }),
      getProjectById: builder.query({
        query: (id) => ({
          url: `/projects/${id}`,
        }),
      }),
      getProjectImage: builder.query({
        query: (id) => ({
          url: `/uploads/project/${id}`,
        }),
      }),
      // Mutation
      createProject: builder.mutation({
        query: (args) => ({
          url: "/projects",
          method: "POST",
          body: args,
        }),
      }),
      updateProject: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/projects/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteProject: builder.mutation({
        query: (id) => ({
          url: `/projects/${id}`,
          method: "DELETE",
        }),
      }),
      updateTemplate: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/projects/template/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      uploadProjectImg: builder.mutation({
        query: (args) => ({
          url: "/uploads/project",
          method: "POST",
          body: args,
        }),
      }),
    }),
  });

export const {
  useGetProjectByIdQuery,
  useGetProjectListQuery,
  useLazyGetProjectListQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
} = projectApi;
