import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";

const MainPage = lazy(() => import("../Pages/MainPage.jsx"));

const root = createBrowserRouter([
    {
        path:"",
        element:<Suspense fallback={null} ><MainPage /></Suspense>
    }
])

export default root;