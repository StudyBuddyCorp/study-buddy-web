import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";

const ErrorPage = lazy(() => import("@/pages/error"));
const AuthPage = lazy(() => import("@/pages/auth"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));

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
                index: true,
                element: <DashboardPage />
            }
        ]
    }
])