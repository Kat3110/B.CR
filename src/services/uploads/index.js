import { api } from "..";

// Uploads Api CreateApi
export const uploadApi = api
  .enhanceEndpoints({
    addTagTypes: ["Upload"],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Mutation
      fileUpload: builder.mutation({
        query: (args) => ({
          url: "/uploads",
          method: "POST",
          body: args,
        }),
      }),
    }),
  });

export const { useFileUploadMutation } = uploadApi;
