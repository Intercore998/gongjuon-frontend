import HeaderNav from "@/Section/HeaderNav.jsx";
import FooterNav from "@/Section/FooterNav.jsx";
import {Outlet} from "react-router";

const CommonLayout = ()=>{
    return(
        <>
            <HeaderNav/>
                <Outlet />
            <FooterNav/>
        </>
    )
}

export default CommonLayout;