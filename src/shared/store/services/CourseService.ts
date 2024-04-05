import {
    CreateCourseRequest,
    EditCourseRequest,
    GetCoursesRequest,
    SubscribeStudentRequest,
} from "@/entities/course/request/";
import { CreateCourseResponse } from "@/entities/course/response";
import { Course } from "@/entities/course/ICourse";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseAPI = createApi({
    reducerPath: "courseAPI",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ["courses"],
    endpoints: (build) => ({
        createCourse: build.mutation<CreateCourseResponse, CreateCourseRequest>(
            {
                query: (request) => ({
                    url: "/courses",
                    method: "POST",
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token",
                        )}`,
                    },
                    body: request,
                }),
                invalidatesTags: ["courses"],
            },
        ),
        getCourses: build.query<Course[], GetCoursesRequest>({
            query: (params) => ({
                url: "/courses",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                credentials: "include",
                params,
            }),
            providesTags: () => ["courses"],
        }),
        count: build.query<number, void>({
            query: () => ({
                url: "/courses/count",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                credentials: "include",
            }),
            providesTags: () => ["courses"],
        }),
        delete: build.mutation<void, string>({
            query: (id) => ({
                url: `/courses/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                credentials: "include",
            }),
            invalidatesTags: ["courses"],
        }),
        edit: build.mutation<void, EditCourseRequest>({
            query: ({ id, body }) => ({
                url: `/courses/${id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                credentials: "include",
                body,
            }),
            invalidatesTags: ["courses"],
        }),
        subscribeStudent: build.mutation<void, SubscribeStudentRequest>({
            query: ({ courseId, studentId }) => ({
                url: `/courses/${courseId}/subscribe/student/${studentId}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                credentials: "include",
            }),
            invalidatesTags: ["courses"],
        }),
    }),
});

export const { useCreateCourseMutation, useGetCoursesQuery, useCountQuery, useDeleteMutation, useEditMutation, useSubscribeStudentMutation } =
    courseAPI;
