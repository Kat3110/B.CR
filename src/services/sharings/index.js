import { api } from "..";

// Project Role Api CreateApi
export const sharingApi = api
  .enhanceEndpoints({
    addTagTypes: ["ProjectRole"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getProjectRole: builder.query({
        query: (args) => ({
          url: `/admins/project/user`,
          params: args,
        }),
      }),
    }),
  });

export const { useGetProjectRoleQuery } = sharingApi;
