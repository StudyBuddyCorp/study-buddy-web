import { Role, User } from '@user/';
import {
  CreateUserResponse,
  GetStudentsResponse,
} from '@user/response';
import {
  CreateUserRequest,
  GetStudentsRequest as GetUsersRequest,
  UserCountRequest,
} from '@user/request';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AuthenticationResponse,
  LoginRequest,
  RegistrationRequest,
} from '@/entities/auth';
import { API_URL } from '@/shared/lib/api';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['user', 'students'],
  endpoints: build => ({
    registration: build.mutation<AuthenticationResponse, RegistrationRequest>({
      query: (request: RegistrationRequest) => ({
        url: '/auth/registration',
        method: 'POST',
        credentials: 'include',
        body: request,
      }),
      invalidatesTags: ['user'],
    }),

    login: build.mutation<AuthenticationResponse, LoginRequest>({
      query: (request: LoginRequest) => ({
        url: '/auth/login',
        method: 'POST',
        credentials: 'include',
        body: request,
      }),
      invalidatesTags: ['user'],
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        credentials: 'include',
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['user'],
    }),
    refresh: build.query<AuthenticationResponse, void>({
      query: () => ({
        url: '/auth/refresh',
        credentials: 'include',
      }),
      providesTags: () => ['user'],
    }),
    createStudent: build.mutation<CreateUserResponse, CreateUserRequest>({
      query: request => ({
        url: '/users',
        method: 'POST',
        credentials: 'include',
        body: { ...request, role: Role.STUDENT },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['students'],
    }),
    getUsers: build.query<User[], GetUsersRequest>({
      query: params => ({
        url: '/users',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params,
      }),
      transformResponse: (res: GetStudentsResponse) =>
        res._embedded?.userDtoes ?? [],
      providesTags: () => ['students'],
    }),
    count: build.query<number, UserCountRequest>({
      query: params => ({
        url: '/users/count',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params,
      }),
    }),
  }),
});

export const { useCreateStudentMutation, useGetUsersQuery, useCountQuery } =
  userAPI;
