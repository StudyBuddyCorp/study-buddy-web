import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";
import ErrorPage from "@/pages/error";
import BrsPage from "@/pages/brs";
import Schedule from "@/pages/schedule";
import AdminTeachers from "@/pages/admin/teachers/page";

const AuthPage = lazy(() => import("@/pages/auth"));
const DashboardPage = lazy(() => import("@/pages/home"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const CoursePage = lazy(() => import("@/pages/course/page"));

// Admin routes
const AdminCourse = lazy(() => import("@/pages/admin/course"));
const SubscribeToCoursePage = lazy(() => import("@/pages/admin/subscribe/page"));
const CreateUserPage = lazy(() => import("@/pages/admin/students/page"));


export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: '/course/:id',
                element: <CoursePage />
            },
            {
                path: '/auth',
                element: <AuthPage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/brs',
                element: <BrsPage />
            },
            {
                path: '/schedule',
                element: <Schedule />
            },
            {
                path: '/admin/course',
                element: <AdminCourse />
            },
            {
                path: '/admin/teachers',
                element: <AdminTeachers />
            },
            {
                path: '/admin/create/user',
                element: <CreateUserPage />
            },
            {
                path: '/admin/subscribe',
                element: <SubscribeToCoursePage />
            },
        ]
    }
])