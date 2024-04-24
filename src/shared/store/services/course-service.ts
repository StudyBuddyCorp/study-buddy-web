import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as z from 'zod';
import {
  CourseIdUserIdRequest,
  CreateCourseRequest,
  GetCourseRequest,
  GetCoursesRequest,
} from '@/entities/course/request';
import { CreateCourseResponse } from '@/entities/course/response';
import { Course } from '@/entities/course/course';
import { API_URL } from '@/shared/lib/api';
import { courseUpdateSchema, studentSubscribeSchema } from '@/schemas';

export const courseAPI = createApi({
  reducerPath: 'courseAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    credentials: 'include',
  }),
  tagTypes: ['courses'],
  endpoints: build => ({
    createCourse: build.mutation<CreateCourseResponse, CreateCourseRequest>({
      query: request => ({
        url: '/courses',
        method: 'POST',
        body: request,
      }),
      invalidatesTags: ['courses'],
    }),
    getCourses: build.query<Course[], GetCoursesRequest>({
      query: params => ({
        url: '/courses',
        method: 'GET',
        params,
      }),
      providesTags: () => ['courses'],
    }),
    getCourse: build.query<Course, GetCourseRequest>({
      query: ({ id }) => ({
        url: `/courses/${id}`,
        method: 'GET',
      }),
      providesTags: () => ['courses'],
    }),
    count: build.query<number, void>({
      query: () => ({
        url: '/courses/count',
        method: 'GET',
      }),
      providesTags: () => ['courses'],
    }),
    delete: build.mutation<void, string>({
      query: id => ({
        url: `/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['courses'],
    }),
    edit: build.mutation<void, z.infer<typeof courseUpdateSchema>>({
      query: ({ id, title, description }) => ({
        url: `/courses/${id}`,
        method: 'PATCH',
        body: {
          title,
          description,
        },
      }),
      invalidatesTags: ['courses'],
    }),
    subscribeStudent: build.mutation<
      void,
      z.infer<typeof studentSubscribeSchema>
    >({
      query: ({ courseId, studentId }) => ({
        url: `/courses/${courseId}/subscribe/student/${studentId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['courses'],
    }),
    checkEdit: build.query<boolean, CourseIdUserIdRequest>({
      query: ({ courseId, userId }) => ({
        url: `/courses/${courseId}/can-edit/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useCountQuery,
  useDeleteMutation,
  useEditMutation,
  useSubscribeStudentMutation,
  useCheckEditQuery,
} = courseAPI;
