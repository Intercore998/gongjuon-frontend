import {Button, Navbar} from "@material-tailwind/react";
import {ArrowLeftIcon} from "@heroicons/react/24/outline/index.js";


const MobileHeaderNav = () => {
    return(
        <Navbar variant={"filled"} className={"fixed mx-auto max-w-screen-xl h-[8vh] px-4 py-3 top-0 z-50"}>
            <div>
                <Button variant={"text"} className={"absolute left-2"}>
                    <ArrowLeftIcon className={"w-10 h-10"}/>
                </Button>
            </div>
            <div className={"w-full flex justify-center items-center justify-items-center h-full"}>
                <h3 className={"text-4xl font-semibold text-black"}> title </h3>
            </div>
        </Navbar>
    )
}

export default MobileHeaderNav;