import { api } from "..";

// Invitations Api CreateApi
export const invitationsApi = api
  .enhanceEndpoints({
    addTagTypes: ["Invitation"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getInvitations: builder.query({
        query: (projectId) => ({
          url: "/invitations",
          params: { projectId },
        }),
      }),
      getInvitationById: builder.query({
        query: (id) => ({
          url: `/invitations/${id}`,
        }),
      }),
      // Mutation
      createInvitation: builder.mutation({
        query: (args) => ({
          url: "/invitations",
          method: "POST",
          body: args,
        }),
      }),
      updateInvitationById: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/invitations/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteInvitationById: builder.mutation({
        query: (id) => ({
          url: `/invitations/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useLazyGetInvitationsQuery,
  useCreateInvitationMutation,
  useDeleteInvitationByIdMutation,
  useUpdateInvitationByIdMutation,
} = invitationsApi;
