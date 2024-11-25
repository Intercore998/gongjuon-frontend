import {Link} from "react-router-dom";
import logoImg from "@assets/image/logo/logo.png";

const Logo = () => {

    return (
        <>
            <h1
                className="absolute flex top-0 sm:left-5 md:left-20 lg:left-40 text-center p-1.5 bg-black w-[200px] h-[150px] justify-center items-center z-50">
                <Link className="block w-[80%] h-[80%]" to={"/"} title={"https://ggm-art.kr/"}>
                    <img className="object-cover" src={logoImg} alt="2024 공주온밤"/>
                </Link>
            </h1>
        </>
    )
}

export default Logo;