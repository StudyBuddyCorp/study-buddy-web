import { GetGroupsRequest } from "@/entities/group/GetGroupsRequest";
import { GetGroupsResponse } from "@/entities/group/GetGroupsResponse";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupAPI = createApi({
  reducerPath: "groupAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getGroups: build.query<GetGroupsResponse, GetGroupsRequest>({
      query: ({department, specialty}) => ({
        url: "/groups/get",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        credentials: "include",
        params: { department, specialty },
      }),
    }),
  }),
});
