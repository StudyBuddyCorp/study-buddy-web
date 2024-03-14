import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";
import ErrorPage from "@/pages/error";
import AdminLayout from "./AdminLayout";

const AuthPage = lazy(() => import("@/pages/auth"));
const RegistrationPage = lazy(() => import("@/pages/registration"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const AdminPage = lazy(() => import("@/pages/admin"));
const CreateCoursePage = lazy(() => import("@/pages/admin/create/course/page"));
const CreateUserPage = lazy(() => import("@/pages/admin/create/user/page"));
const SubscribeToCoursePage = lazy(() => import("@/pages/admin/subscribe/page"));



export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/auth',
                element: <AuthPage />
            },
            {
                path: '/registration',
                element: <RegistrationPage />
            },
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/admin',
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <AdminPage />
                    },
                    {
                        path: '/admin/create/course',
                        element: <CreateCoursePage />
                    }, {
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