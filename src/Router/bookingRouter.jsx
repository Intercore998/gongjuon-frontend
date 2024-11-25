import {lazy, Suspense} from "react";

const Main = lazy(() => import("@pages/Booking/BookingPage.jsx"));

const bookingRouter = ()=>{
    return[
        {
            path:"",
            element:<Suspense fallback={null}><Main /></Suspense>
        },
        {
            path: "create",
            element:<Suspense fallback={null}></Suspense>
        },
        {
            path: "update",
            element:<Suspense fallback={null}></Suspense>
        }
    ]
}

export default bookingRouter;