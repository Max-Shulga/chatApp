import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "@/types/api";

export const instance = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseURL,
    prepareHeaders: async (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => {
        return "";
      },
    }),
  }),
});
export const { useGetDataQuery } = instance;
