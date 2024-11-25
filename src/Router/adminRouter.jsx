import {lazy, Suspense} from "react";

const adminRouter = () =>{
    return [
        {
            path:"signup",
            element:<Suspense fallback={null}></Suspense>
        },
        {
            path:"login",
            element:<Suspense fallback={null}></Suspense>
        }

    ]
}

export default adminRouter;