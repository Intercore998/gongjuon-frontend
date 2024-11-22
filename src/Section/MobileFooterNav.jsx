import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
} from "@material-tailwind/react";
import {BellIcon, Cog6ToothIcon} from "@heroicons/react/24/solid";
import {
    HomeIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    PencilSquareIcon,
    UserIcon
} from "@heroicons/react/24/outline/index.js";


const MobileFooterNav = () => {


    return (
        <Navbar variant="gradient" className="w-full fixed bottom-0 z-50">
            <div className="grid grid-cols-5 items-center justify-items-stretch gap-y-4 text-white">
                <Button color={"white"} className={"flex items-center justify-center h-full"}>
                    <HomeIcon className={"h-10 w-10 text-black min-w-48px min-h-48px items-center"}/>
                </Button>
                <Button color={"white"} className={"flex items-center justify-center h-full"}>
                    <PencilSquareIcon className={"h-10 w-10 text-black min-w-48px min-h-48px"}/>
                </Button>
                <Button color={"white"} className={"flex items-center justify-center h-full"}>
                    <MapPinIcon className={"h-10 w-10 text-black min-w-48px min-h-48px"}/>
                </Button>
                <Button color={"white"} className={"flex items-center justify-center h-full"}>
                    <MagnifyingGlassIcon className={"h-10 w-10 text-black min-w-48px min-h-48px"}/>
                </Button>
                <Button color={"white"} className={"flex items-center justify-center h-full"}>
                    <UserIcon className={"h-10 w-10 text-black min-w-48px min-h-48px"}/>
                </Button>
            </div>
        </Navbar>
    );
}

export default MobileFooterNav;