import {lazy, Suspense} from "react";

const Main = lazy(() => import("@pages/Programs/ProgramsPage.jsx"));
const Detail = lazy(()=>import("@pages/Programs/ProgramDetailPage.jsx"))
const programRouter = ()=>{
    return [
        {
            path:"",
            element:<Suspense fallback={null}><Main /></Suspense>
        },
        {
            path:":id",
            element:<Suspense fallback={null}><Detail /></Suspense>,
        }
    ]
}

export default programRouter;