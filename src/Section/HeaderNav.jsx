import { useState } from "react";
import Logo from "@/StyledUIComponent/Logo.jsx";
import navJson from "@assets/json/nav.json";
import {IconButton} from "@material-tailwind/react";
import {FaFacebook} from "react-icons/fa6";
import {InstagramIcon} from "@/StyledUIComponent/InstagramIcon.jsx";
import {Link} from "react-router-dom";

const HeaderNav = () => {
    const [isNavOpen, setNavOpen] = useState(false); // 트리거 상태
    const [isAnimating, setAnimating] = useState(false); // 애니메이션 진행 상태
    const [activeMenu, setActiveMenu] = useState(0);

    const handleMouseEnter = (index) => {
        if (!isNavOpen) { // 이미 열려있으면 무시
            setNavOpen(true);
            setAnimating(true);
        }
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        if (isNavOpen) { // 이미 닫혀있으면 무시
            setNavOpen(false);
            setAnimating(true);
        }
    };

    const handleAnimationEnd = () => {
        if (!isNavOpen) { // 애니메이션 종료 시 DOM 제거
            setAnimating(false);
        }
    };

    return (
        <>
            <nav className="w-full h-[8em] sticky top-0 bg-white z-40">
                <Logo />
                <div className="h-full lg:pl-[25em] md:pl-[20em] sm:pl-[15em] flex items-center justify-between box-border">
                    <ul className="flex flex-row gap-14 text-2xl h-full items-center justify-items-center">
                        {navJson.map((item, index) => (
                            <li
                                key={index}
                                className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-10px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                                onMouseEnter={()=>handleMouseEnter(index)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                    <div className={"flex gap-4 pr-4 box-border"}>
                        <a href="https://www.facebook.com/gjcf2020/" target="_blank" rel="noopener noreferrer" title="공주문화관광재단 페이스북페이지 이동">
                            <IconButton variant={"text"} className={"bg-white text-blue-900 text-4xl rounded-full"}>
                                <FaFacebook/>
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/gongju_nights/" target="_blank" rel="noopener noreferrer" title="공주문화관광재단 인스타그램 이동">
                            <IconButton variant="text" className="text-4xl rounded-full p-4">
                                <InstagramIcon />
                            </IconButton>
                        </a>
                    </div>
                </div>
            </nav>
            <div
                className={`w-full bg-white h-[300px] fixed z-30 transition-all duration-300 ${
                    isNavOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
                }`}
                onMouseLeave={handleMouseLeave}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className="lg:pl-[17em] md:pl-[14em] sm:pl-[11em]  flex items-center gap-20 text-2xl box-border">
                    <p className="text-brown-700">{navJson[activeMenu].label}</p>
                    {navJson[activeMenu].depth.map((item, index) =>
                        item.migration ? (
                            <a
                                key={index}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-black hover:text-gray-700 relative group"
                            >
                                <span
                                    className="text-3xl text-center absolute h-full right-[-1em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brown-700">
                                  •
                                </span>
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={index}
                                to={item.path}
                                className="block text-black hover:text-gray-700 relative group"
                            >
                            <span className="text-3xl text-center absolute h-full right-[-1em] opacity-0 group-hover:opacity-100 transition-opacity duration-100 text-brown-700">
                              •
                            </span>
                                {item.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default HeaderNav;