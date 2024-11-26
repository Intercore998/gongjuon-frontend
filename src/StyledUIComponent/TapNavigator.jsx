import {Link, useLocation} from "react-router-dom";


const TapNavigator = ({Taps}) => {
    const location = useLocation();
    return(
        <div className="w-full">
            <ul className="flex flex-row gap-14 text-4xl items-center justify-center ">
                {Taps.map(({label, path}, index) => {
                    const isActive = location.pathname.includes(path)
                    return(
                    <li
                        key={index}
                        className={`relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-10px] after:left-0 after:transition-all after:duration-300 hover:after:w-full
                        ${isActive ? "after:w-full":""}
                        `}
                    >
                        {isActive?
                            label:
                            <Link
                            key={index}
                            to={path}
                            className="block text-black hover:text-brown-700 relative group">
                            {label}
                        </Link>}
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default TapNavigator;