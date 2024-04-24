import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout1';
import {
  AdminCourse,
  AuthPage,
  CoursePage,
  CreateUserPage,
  DashboardPage,
  ProfilePage,
  SubscribeToCoursePage,
} from './lazy-components';
import ErrorPage from '@/pages/error';
import BrsPage from '@/pages/brs';
import Schedule from '@/pages/schedule';
import AdminTeachers from '@/pages/admin/teachers/page';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/course/:id',
        element: <CoursePage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/brs',
        element: <BrsPage />,
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
      {
        path: '/admin/course',
        element: <AdminCourse />,
      },
      {
        path: '/admin/teachers',
        element: <AdminTeachers />,
      },
      {
        path: '/admin/create/user',
        element: <CreateUserPage />,
      },
      {
        path: '/admin/subscribe',
        element: <SubscribeToCoursePage />,
      },
    ],
  },
]);
