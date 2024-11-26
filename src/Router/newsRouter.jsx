import {lazy, Suspense} from "react";

const Main = lazy(() => import("@pages/Notice/NoticePage.jsx"));

const newsRouter = ()=> {
    return[
        {
            path:"",
            element:<Suspense fallback={null}><Main page={"news"}/></Suspense>
        },
        {
            path:":id",
            element:<Suspense fallback={null}><Main /></Suspense>,
        },
        {
            path:"create",
            element:<Suspense fallback={null}></Suspense>
        },
        {
            path:":id/edit",
            element:<Suspense fallback={null}></Suspense>,
        }
    ]
}

export default newsRouter;