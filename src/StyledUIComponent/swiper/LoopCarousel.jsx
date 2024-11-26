import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaPlay } from 'react-icons/fa6';
import { FaPause } from 'react-icons/fa6';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PictureAndTitleItem from "@/StyledUIComponent/swiper/items/PictureAndTitleItem.jsx";


// 오늘의 공산성 data값
const data = {
  title: '공주 온(ON)밤',
  year: '2024',
  contents: [
    { id: 1, title: '희망의 고마' },
    { id: 2, title: '무령의 꿈' },
    { id: 3, title: '웅진꽃길' },
    { id: 4, title: '웅진의문' },
    { id: 5, title: '빛의 사다리' },
    { id: 6, title: '수호의 빛' },
    { id: 7, title: '천년의 숲' },
    { id: 8, title: '진묘수 쉼터' },
  ],
};

function LoopCarousel() {
  const swiperRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);
  const [swiper, setSwiper] = useState();

  const toggleAutoplay = () => {
    console.log(isPlay)
    if (swiperRef.current) {
      if (isPlay) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlay(!isPlay);
    }
  };

  return (
      <section className="w-full pt-20 pb-10">
        <div className="w-full max-w-[1536px] mx-auto px-5 flex justify-center items-center mb-10  text-center">
          <h3 className="text-[calc(16px+1.1vw)] font-medium font-recipekorea">{data.title}</h3>
          <div className="absolute right-10 flex gap-3">
            <button onClick={() => swiper?.slidePrev()} className="w-[calc(13px+0.3vw)] h-[calc(13px+0.3vw)] text-black">
              <FaChevronLeft />
            </button>
            <button onClick={toggleAutoplay} className="w-[calc(13px+0.3vw)] h-[calc(13px+0.3vw)] text-black">
              {isPlay ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={() => swiper?.slideNext()} className="w-[calc(13px+0.3vw)] h-[calc(13px+0.3vw)] text-black">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div>
          <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1.4}
              spaceBetween={30}
              breakpoints={{
                320: { slidesPerView: 1.4 },
                400: { slidesPerView: 1.8 },
                768: { slidesPerView: 2.6 },
                1024: { slidesPerView: 3.6 },
                1440: { slidesPerView: 4.4 },
                2560: { slidesPerView: 6.4 },
              }}
              speed={1000}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              centeredSlides
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setSwiper(swiper);
              }}
              className="relative"
          >
            {data.contents.map((item, index) => (
              <SwiperSlide className="flex flex-col items-center" key={index}>
                <PictureAndTitleItem year={data.year} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
}

export default LoopCarousel;