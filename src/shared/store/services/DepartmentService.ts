import { GetDepartmentsResponse } from "@/entities/department/GetDepartmentsResponse";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentAPI = createApi({
  reducerPath: "departmentAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getDepartment: build.query<GetDepartmentsResponse, void>({
      query: () => ({
        url: "/departments/get",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        credentials: "include",
      }),
    }),
  }),
});
