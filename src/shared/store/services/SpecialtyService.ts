import { GetSpecialtiesResponse } from "@/entities/specialty/GetSpecialtiesResponse";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const specialtyAPI = createApi({
  reducerPath: "specialtyAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getSpecialty: build.query<GetSpecialtiesResponse, string>({
      query: (department) => ({
        url: "/specialties/get",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        credentials: "include",
        params: { department },
      }),
    }),
  }),
});
