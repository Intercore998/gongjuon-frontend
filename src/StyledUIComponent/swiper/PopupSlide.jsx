import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import TitleSlideButton from "@/StyledUIComponent/swiper/TitleWithSwiperButton.jsx";

function PopupSlide() {
  const swiperRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);

  const [swiper, setSwiper] = useState();

  // swiper play stop 함수
  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlay) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlay(!isPlay);
    }
  };

  const popupLists = ['01', '02'].map((item, idx) => {
    return (
      <SwiperSlide className={""} key={idx}>
        <Link to="#" className={""}>
          <div className={""}>
            <img src={`${import.meta.env.VITE_BASE_URL}/images/popup/popup_img_${item}.jpeg`} alt="" />
          </div>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className={""}>
        {/* stop play 있는 subTitle */}
        <TitleSlideButton title="팝업창" isPlay={isPlay} toggleAutoplay={toggleAutoplay} swiper={swiper} />
        <div className={""}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className={""}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setSwiper(swiper);
            }}
          >
            {popupLists}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default PopupSlide;
