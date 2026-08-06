import { baseApi } from "./baseApi";

export const qwizApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQwestionsList: build.mutation({
      query: (params) => ({
        url: "/api.php",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetQwestionsListMutation } = qwizApi;
