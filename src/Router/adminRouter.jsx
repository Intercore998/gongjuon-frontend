import {lazy, Suspense} from "react";

const RegisterPage = lazy(() => import("@pages/Admin/RegisterPage.jsx"));
const LoginPage = lazy(() => import("@pages/Admin/LoginPage.jsx"));

const adminRouter = () =>{
    return [
        {
            path:"signup",
            element:<Suspense fallback={null}><RegisterPage /></Suspense>
        },
        {
            path:"login",
            element:<Suspense fallback={null}><LoginPage /></Suspense>
        }

    ]
}

export default adminRouter;