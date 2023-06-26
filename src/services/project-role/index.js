import { api } from "..";

// Project Role Api CreateApi
export const projectRoleApi = api
  .enhanceEndpoints({
    addTagTypes: ["ProjectRole"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getProjectRole: builder.query({
        query: (projectId) => ({
          url: `/projects/${projectId}/role`,
        }),
      }),
      // Mutation
      updateProjectRole: builder.mutation({
        query: ({ id, projectId, ...args }) => ({
          url: `/projects/${projectId}/role/${id}`,
          method: "PUT",
          body: { ...args, projectId },
        }),
      }),
      deleteProjectRole: builder.mutation({
        query: ({ id, projectId }) => ({
          url: `/projects/${projectId}/role/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetProjectRoleQuery,
  useLazyGetProjectRoleQuery,
  useDeleteProjectRoleMutation,
  useUpdateProjectRoleMutation,
} = projectRoleApi;
