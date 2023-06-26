import { api } from "..";

// Notices Api CreateApi
export const faqsApi = api
  .enhanceEndpoints({ addTagTypes: ["Faqs"] })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getFaqs: builder.query(),
      getFaqById: builder.query({
        query: (id) => ({
          url: `/${id}`,
        }),
      }),
      // Mutation
      createFaq: builder.mutation({
        query: (args) => ({
          method: "POST",
          body: args,
        }),
      }),
      updateFaqById: builder.mutation({
        query: ({ id, ...args }) => ({
          url: `/${id}`,
          method: "PUT",
          body: args,
        }),
      }),
      deleteFaqById: builder.mutation({
        query: (id) => ({
          url: `/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });
