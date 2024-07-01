import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { SvelteContainer } from "../Wrappers/SvelteContainer";
import { ErrorPage } from "../pages/errors/ErrorPage";
import { Layout } from "./Layout/Layout";
import { VueContainer } from "../Wrappers/VueContainer";

const ReactProject = lazy(() => import("react_project/App" as any))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Suspense fallback="...loading"><ReactProject /></Suspense> },
            { path: "/withReact", element: <Suspense fallback="...loading"><ReactProject /></Suspense> },
            { path: "/withVue", element: <Suspense fallback="...loading"><VueContainer /></Suspense> },
            { path: "/withSvelte", element: <Suspense fallback="...loading"><SvelteContainer /></Suspense> },
            // { path: "/withAngular", element: <div>withAngular</div> }
        ]
    },
])