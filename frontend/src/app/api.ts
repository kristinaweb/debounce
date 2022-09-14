import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "./types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getFirstByName: builder.query<ICountry[], string>({
      query: (name) => {
        return {
          url: `countries?q=${name}`,
        };
      },
    }),
  }),
});

export const { useGetFirstByNameQuery } = api;
