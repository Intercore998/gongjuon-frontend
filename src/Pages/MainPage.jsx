import HeaderNav from "../Section/HeaderNav.jsx";
import FooterNav from "@/Section/FooterNav.jsx";
import PageTitle from "@/StyledUIComponent/PageTitle.jsx";
import LoopCarousel from "@/StyledUIComponent/swiper/LoopCarousel.jsx";
import PopupSlide from "@/StyledUIComponent/swiper/PopupSlide.jsx";
import FooterLink from "@/Section/FooterLink.jsx";


const MainPage = ({page}) => {
    return(
        <>
            <div className="w-full bg-green-400">
                <div className="grid grid-cols-12 p-4 gap-4 w-full box-border">
                    <div className={"col-span-4 bg-black"}>
                        section 1
                    </div>
                    <div className={"col-span-8 bg-white"}>
                        section 2
                    </div>
                </div>
                <LoopCarousel />
                <PopupSlide />
                <FooterLink />
            </div>
        </>
    )
}

export default MainPage;