import { api } from "..";

// Favorites Api CreateApi
export const favortiesApi = api
  .enhanceEndpoints({ addTagTypes: ["Favorite"] })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getFavorties: builder.query({
        query: () => "/favorites",
      }),
      getFavoriteById: builder.query({
        query: (id) => ({
          url: `/favorites/${id}`,
        }),
      }),
      // Mutation
      createFavorite: builder.mutation({
        query: (args) => ({
          url: "/favorites",
          method: "POST",
          body: args,
        }),
      }),
      updateFavoriteById: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/favorites/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteFavoriteById: builder.mutation({
        query: (id) => ({
          url: `/favorites/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });

export const {
  useGetFavortiesQuery,
  useCreateFavoriteMutation,
  useDeleteFavoriteByIdMutation,
} = favortiesApi;
