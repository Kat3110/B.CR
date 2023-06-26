import { api } from "..";
import { countryData } from "utils/country";
import { isEmpty } from "lodash";
import { roleFormater } from "./utils";
import dayjs from "dayjs";

// Admin Api CreateApi
export const adminApi = api
  .enhanceEndpoints({
    addTagTypes: ["Admin"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      adminGetUsers: builder.query({
        query: (args) => ({
          url: "/admins/user",
          params: args,
        }),
        transformResponse(res, _meta, { page, limit }) {
          const { count, rows } = res.data;
          const pageLength = Math.ceil(count / limit);

          return {
            pageLength: pageLength > 0 ? pageLength : 1,
            data: rows.map((item, i) => {
              const nation = countryData.filter(
                (nation) => nation.code === item.nation,
              )[0];

              const business = item.Business;

              return {
                id: item.id,
                no: (page - 1) * 10 + i + 1,
                name: item.name,
                nation: isEmpty(nation) ? undefined : nation.name,
                profileColor: item.profileColor,
                email: item.email,
                company: business?.companyName || "",
                position: business?.department || "",
                authority: roleFormater(item.role),
                joined: item.createdAt,
                lastAccess: item.lastAccessAt,
                status: item.status === "0" && "Withdrawn",
              };
            }),
          };
        },
      }),
      adminGetUserById: builder.query({
        query: (userId) => ({
          url: `/admins/user/${userId}`,
        }),
        transformResponse({ data: { Business, ...userData } }) {
          return {
            name: userData.name,
            nation: userData.nation,
            email: userData.email,
            company: Business.companyName,
            position: Business.department,
            role: userData.role,
            joinedAt: dayjs(userData.createdAt).format("YYYY-MM-DD HH:MM"),
            lastAccessAt: userData.lastAccessAt
              ? dayjs(userData.createdAt).format("YYYY-MM-DD HH:MM")
              : "",
            editLog: [],
            note: "",
          };
        },
      }),
      adminGetUserHistory: builder.query({
        query: (userId) => ({
          url: `/admins/user/history/${userId}`,
        }),
      }),
      // Mutation
      adminLogin: builder.mutation({
        query: (args) => ({
          url: "/auth/admin/login",
          method: "POST",
          body: args,
        }),
      }),
      adminAddUser: builder.mutation({
        query: (args) => ({
          url: "/admin/user",
          method: "POST",
          body: args,
        }),
      }),
      adminUpdateUser: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/admins/user/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      adminUserRegister: builder.mutation({
        query: (args) => ({
          url: "/auth/register",
          method: "POST",
          body: args,
        }),
      }),
      adminCheckExistEmail: builder.mutation({
        query: (email) => ({
          url: "/checkExistEmail",
          method: "POST",
          body: { email },
        }),
      }),
      adminRegisterUsers: builder.mutation({
        query: (args) => ({
          url: "/auth/register/array",
          method: "POST",
          body: args,
        }),
      }),
      adminDeleteMember: builder.mutation({
        query: (id) => ({
          url: `/users/${id}`,
          method: "DELETE",
        }),
      }),
      adminForgotPassword: builder.mutation({
        query: (args) => ({
          url: "/auth/forgot-password",
          method: "POST",
          body: args,
        }),
      }),
    }),
  });

export const {
  useLazyAdminGetUsersQuery: useLazyGetUsersQuery,
  useAdminLoginMutation: useLoginMutation,
  useAdminAddUserMutation: useAddUserMutation,
  useAdminUpdateUserMutation: useUpdateUserMutation,
  useAdminUserRegisterMutation: useRegisterMutation,
  useAdminCheckExistEmailMutation: useCheckExistEmailMutation,
  useAdminRegisterUsersMutation: useRegisterUsersMutation,
  useLazyAdminGetUserByIdQuery: useLazyGetUserByIdQuery,
  useLazyAdminGetUserHistoryQuery: useLazyGetUserHistoryQuery,
  useAdminDeleteMemberMutation: useDeleteMemberMutation,
  useAdminForgotPasswordMutation: useForgotPasswordMutation,
} = adminApi;
