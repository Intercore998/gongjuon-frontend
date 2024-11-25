import HeaderNav from "@/Section/HeaderNav.jsx";
import FooterNav from "@/Section/FooterNav.jsx";
import {Outlet} from "react-router";
import PageTitle from "@/StyledUIComponent/PageTitle.jsx";

const CommonLayout = ()=>{
    return(
        <>
            <PageTitle />
            <HeaderNav/>
                <Outlet />
            <FooterNav/>
        </>
    )
}

export default CommonLayout;