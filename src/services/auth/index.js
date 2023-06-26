import { api } from "..";

// Auth Api CreateApi
export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ["Auth"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getEmailByToken: builder.query({
        query: (token) => ({
          url: "/auth/email",
          params: { token },
        }),
      }),
      getProfile: builder.query({
        query: () => ({
          url: "/auth/me",
        }),
      }),
      // Mutation
      login: builder.mutation({
        query: (args) => ({
          url: "/auth/login",
          method: "POST",
          body: args,
        }),
      }),
      checkExistEmail: builder.mutation({
        query: (email) => ({
          url: "/checkExistEmail",
          method: "POST",
          body: { email },
        }),
      }),
      updatePassword: builder.mutation({
        query: (args) => ({
          url: "/auth/update-password",
          method: "POST",
          body: args,
        }),
      }),
      register: builder.mutation({
        query: (args) => ({
          url: "/auth/register",
          method: "POST",
          body: args,
        }),
      }),
      authToken: builder.mutation({
        query: (args) => ({
          url: "/auth/auth-token",
          method: "POST",
          body: args,
        }),
      }),
      forgotPassword: builder.mutation({
        query: (args) => ({
          url: "/auth/forgot-password",
          method: "POST",
          body: args,
        }),
      }),
      sendRegistration: builder.mutation({
        query: (args) => ({
          url: "/auth/send/registration",
          method: "POST",
          body: args,
        }),
      }),
      verifyRegistartion: builder.mutation({
        query: (args) => ({
          url: "/auth/verify/registration",
          method: "POST",
          body: args,
        }),
      }),
      updateProfile: builder.mutation({
        query: (args) => ({
          url: "/updateProfile",
          method: "PUT",
          body: args,
        }),
      }),
    }),
  });

export const {
  useLoginMutation,
  useCheckExistEmailMutation,
  useRegisterMutation,
  useGetEmailByTokenQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useSendRegistrationMutation,
  useForgotPasswordMutation,
} = authApi;
