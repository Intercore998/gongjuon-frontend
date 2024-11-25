import HeaderNav from "../Section/HeaderNav.jsx";
import FooterNav from "@/Section/FooterNav.jsx";


const MainPage = ({page}) => {
    return(
        <div className="w-full h-[500px] bg-green-400">
            <div className="grid grid-cols-12 p-4 gap-4 w-full box-border">
                <div className={"col-span-4 bg-black"}>
                    section 1
                </div>
                <div className={"col-span-8 bg-white"}>
                    section 2
                </div>
            </div>
        </div>
    )
}

export default MainPage;