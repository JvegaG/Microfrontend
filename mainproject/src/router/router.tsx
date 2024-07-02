import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { SvelteWrapper } from "../Wrappers/SvelteWrapper";
import { ErrorPage } from "../pages/errors/ErrorPage";
import { Layout } from "./Layout/Layout";
import { VueWrapper } from "../Wrappers/VueWrapper";

const ReactProject = lazy(() => import("react_project/App" as any))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Suspense fallback="...loading"><ReactProject /></Suspense> },
            { path: "/withReact", element: <Suspense fallback="...loading"><ReactProject /></Suspense> },
            { path: "/withVue", element: <Suspense fallback="...loading"><VueWrapper /></Suspense> },
            { path: "/withSvelte", element: <Suspense fallback="...loading"><SvelteWrapper /></Suspense> },
            // { path: "/withAngular", element: <div>withAngular</div> }
        ]
    },
])