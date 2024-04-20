import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";
import ErrorPage from "@/pages/error";
import AdminLayout from "./AdminLayout";
import BrsPage from "@/pages/brs/component";
import Schedule from "@/pages/schedule";

const AdminCourse = lazy(() => import("@/pages/admin/course"));
const AuthPage = lazy(() => import("@/pages/auth"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const AdminPage = lazy(() => import("@/pages/admin"));
const CreateUserPage = lazy(() => import("@/pages/admin/create/user/page"));
const SubscribeToCoursePage = lazy(() => import("@/pages/admin/subscribe/page"));

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
                path: '/admin',
                element: <AdminLayout />,
                children: [
                    {
                        path: '/admin/course',
                        element: <AdminCourse />
                    },
                    {
                        index: true,
                        element: <AdminPage />
                    },
                    {
                        path: '/admin/create/user',
                        element: <CreateUserPage />
                    },
                    {
                        path: '/admin/subscribe',
                        element: <SubscribeToCoursePage />
                    }
                ]
            },
        ]
    }
])