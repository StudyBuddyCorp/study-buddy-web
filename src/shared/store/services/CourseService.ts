import { Course } from "@/entities/course";
import { CreateCourseRequest } from "@/entities/course/CreateCourseRequest";
import { CreateCourseResponse } from "@/entities/course/CreateCourseResponse";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseAPI = createApi({
  reducerPath: "courseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["courses"],
  endpoints: (build) => ({
    createCourse: build.mutation<CreateCourseResponse, CreateCourseRequest>({
      query: (request) => ({
        url: "/courses/create",
        method: "POST",
        credentials: "include",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: request,
      }),
      invalidatesTags: ["courses"],
    }),
    getCourses: build.query<Course[], void>({
      query: () => ({
        url: "/courses/get",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        credentials: "include",
      }),
      providesTags: () => ["courses"],
    }),
  }),
});
