import {lazy, Suspense} from "react";
import noticeRouter from "@/router/noticeRouter.jsx";
import {createBrowserRouter} from "react-router-dom";
import adminRouter from "@/router/adminRouter.jsx";
import bookingRouter from "@/router/bookingRouter.jsx";
import programRouter from "@/router/programRouter.jsx";
import eventRouter from "@/Router/eventRouter.jsx";

const CommonLayout = lazy(() => import("../Layout/CommonLayout.jsx"));

const MainPage = lazy(() => import("@pages/MainPage.jsx"));
const GongjuOn = lazy(() => import("@pages/Gongju/GongjuOnPage.jsx"));
const FAQ = lazy(()=>import("@pages/FAQ/FAQPage.jsx"))
const Character = lazy(()=>import("@pages/Gongju/CharacterPage.jsx"))
// const Loading = <div>Loading...</div>

const root = createBrowserRouter([
    {
        path:"/",
        element:<Suspense fallback={null}><CommonLayout /></Suspense>,
        children:[
            {path: "/",element: <Suspense fallback={null}><MainPage /></Suspense> },
            {path:"gongjuon",element:<Suspense fallback={null}><GongjuOn/></Suspense> },
            {path:"character",element:<Suspense fallback={null}><Character/></Suspense> },
            {path:"faq",element:<Suspense fallback={null}><FAQ /></Suspense> },
            {path:"notice",children:noticeRouter()},
            {path:"event", children:eventRouter()},
            {path:"admin",children:adminRouter()},
            {path:"booking",children:bookingRouter()},
            {path:"program",children:programRouter()},

        ]
    }
])

export default root;