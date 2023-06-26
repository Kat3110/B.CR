import { api } from "..";

// User APi CreateApi
export const userApi = api
  .enhanceEndpoints({ addTagTypes: ["User"] })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getEmailSetting: builder.query({
        query: () => ({
          url: "/email-notifications",
        }),
        providesTags: () => ["User"],
      }),
      // Mutation
      confirmPassword: builder.mutation({
        query: (args) => ({
          url: "/users/confirm-password",
          method: "POST",
          body: args,
        }),
      }),
      changePassword: builder.mutation({
        query: (args) => ({
          url: "/users/change-password",
          method: "POST",
          body: args,
        }),
      }),
      deleteMember: builder.mutation({
        query: () => ({
          url: "/users",
          method: "DELETE",
        }),
      }),
      upsertEmailSetting: builder.mutation({
        query: (args) => ({
          url: "/email-notifications",
          method: "POST",
          body: args,
        }),
        invalidatesTags: ["User"],
      }),
      softDeleteUser: builder.mutation({
        query: (id) => ({
          url: `/admins/user/soft-delete/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetEmailSettingQuery,
  useUpsertEmailSettingMutation,
  useConfirmPasswordMutation,
  useChangePasswordMutation,
  useDeleteMemberMutation,
  useSoftDeleteUserMutation,
} = userApi;
