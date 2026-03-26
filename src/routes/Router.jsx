import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import MyInstallations from "../pages/MyInstallations";
import ErrorPage from "../pages/ErrorPage";


const delay = () => new Promise((res) => setTimeout(res, 600));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: delay,
            },
            {
                path: "/apps",
                element: <AllApps />,
            },
            {
                path: "/apps/:id",
                element: <AppDetails />,
                loader: async ({ params }) => {
                    await delay();
                    return params.id;
                },
            },
            {
                path: "/my-installations",
                element: <MyInstallations />,
                loader: delay,
            },
        ],
    },
]);

export default router;