import { api } from "..";

// Notices Api CreateApi
export const noticesApi = api
  .enhanceEndpoints({
    addTagTypes: ["Notice"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getNotices: builder.query(),
      getNewNoticesCount: builder.query({
        query: () => ({
          url: `/count/new`,
        }),
      }),
      // getNewNoticesCount: builder.query({
      //     query: (id) => ({
      //         url: `/${id}`
      //     })
      // }),
      // Mutation
      createNotice: builder.mutation({
        query: (args) => ({
          method: "POST",
          body: args,
        }),
      }),
      seenNotices: builder.mutation({
        query: (ids) => ({
          url: `/seen`,
          method: "POST",
          body: { ids },
        }),
      }),
    }),
  });
