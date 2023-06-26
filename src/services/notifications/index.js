import { api } from "..";

// Notifications Api CreateApi
export const notificationsApi = api
  .enhanceEndpoints({
    addTagTypes: ["Notification"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getNotification: builder.query({
        query: (args) => ({
          url: "/notifications",
          params: args,
        }),
      }),
      getNotificationAlert: builder.query({
        query: (args) => ({
          url: "/notifications/alert",
          params: args,
        }),
      }),
      getNewNotificationCount: builder.query({
        query: () => ({
          url: `/notifications/count/new`,
        }),
      }),
      getNotificationById: builder.query({
        query: (id) => ({
          url: `/notification/${id}`,
        }),
      }),
      // Mutation
      createNotification: builder.mutation({
        query: (args) => ({
          url: "/notifications",
          method: "POST",
          body: args,
        }),
      }),
      seenNotification: builder.mutation({
        query: (ids) => ({
          url: `/notifications/seen`,
          method: "POST",
          body: { ids },
        }),
      }),
      updateNotificationById: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/notifications/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
    }),
  });

export const {
  useGetNotificationQuery,
  useLazyGetNotificationAlertQuery,
  useGetNotificationAlertQuery,
  useUpdateNotificationByIdMutation,
  useSeenNotificationMutation,
} = notificationsApi;
