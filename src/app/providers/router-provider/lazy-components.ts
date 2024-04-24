import { lazy } from 'react';

export const AuthPage = lazy(() => import('@/pages/auth'));
export const DashboardPage = lazy(() => import('@/pages/home'));
export const ProfilePage = lazy(() => import('@/pages/profile'));
export const CoursePage = lazy(() => import('@/pages/course/page'));

// Admin routes
export const AdminCourse = lazy(() => import('@/pages/admin/course'));
export const SubscribeToCoursePage = lazy(
  () => import('@/pages/admin/subscribe/page'),
);

export const CreateUserPage = lazy(() => import('@/pages/admin/students/page'));
