import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function PictureAndTitleItem({ year,item }) {
    return (
        <>
            <Link to="#" className="flex flex-col items-center max-w-[417px] mx-auto">
                <div className="w-full h-auto rounded-[30px] shadow-md overflow-hidden relative pb-[77%]">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={`/images/program/${year}/program_${item.id}.jpg`}
                        alt={item.title}
                    />
                </div>
                <p className="mt-7 px-7 text-center text-lg text-gray-700">{item.title}</p>
            </Link>

        </>
    );
}

export default PictureAndTitleItem;