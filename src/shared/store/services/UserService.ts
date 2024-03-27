import { AuthenticationResponse } from "@/entities/auth/AuthenticationResponse";
import { LoginRequest } from "@/entities/auth/LoginRequest";
import { LogoutResponse } from "@/entities/auth/LogoutResponse";
import { RegistrationRequest } from "@/entities/auth/RegistrationRequest";
import { CreateUserRequest } from "@/entities/user/CreateUserReques";
import { CreateUserResponse } from "@/entities/user/CreateUserResponse";
import { GetStudentsResponse } from "@/entities/user/GetStudentsResponse";
import { StudentTableData } from "@/entities/user/StudentTableData";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["user", "students"],
  endpoints: (build) => ({
    registration: build.mutation<AuthenticationResponse, RegistrationRequest>({
      query: (request) => ({
        url: "/auth/registration",
        method: "POST",
        credentials: "include",
        body: request,
      }),
      invalidatesTags: ["user"],
    }),

    login: build.mutation<AuthenticationResponse, LoginRequest>({
      query: (request) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        body: request,
      }),
      invalidatesTags: ["user"],
    }),
    logout: build.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/auth/logout",
        credentials: "include",
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
      invalidatesTags: ["user"],
    }),
    refresh: build.query<AuthenticationResponse, void>({
      query: () => ({
        url: "/auth/refresh",
        credentials: "include",
      }),
      providesTags: () => ["user"],
    }),
    createStudent: build.mutation<CreateUserResponse, CreateUserRequest>({
      query: (request) => ({
        url: "/users/create",
        method: "POST",
        credentials: "include",
        body: request,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
      invalidatesTags: ["students"],
    }),
    getStudents: build.query<GetStudentsResponse, void>({
      query: () => ({
        url: "/users/get-students",
        credentials: "include",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
      providesTags: () => ["students"],
    }),
    getStudentsWithParams: build.query<
      User[],
      { name: string; department: string; specialty: string; groupId: string }
    >({
      query: (params) => ({
        url: "/users/get-students",
        credentials: "include",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params,
      }),
      providesTags: () => ["students"],
    }),
  }),
});

export const { useGetStudentsWithParamsQuery } = userAPI;
