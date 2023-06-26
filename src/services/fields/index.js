import { api } from "..";

// Fields Api CreateApi
export const fieldsApi = api
  .enhanceEndpoints({
    addTagTypes: ["Field"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Mutation
      saveTransaction: builder.mutation({
        query: (args) => ({
          method: "PUT",
          body: args,
        }),
      }),
    }),
  });
