import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";

const ErrorPage = lazy(() => import("@/pages/error"));
const AuthPage = lazy(() => import("@/pages/auth"));
const RegistrationPage = lazy(() => import("@/pages/registration"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));
const ProfilePage = lazy(() => import("@/pages/profile"));


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
        ]
    }
])