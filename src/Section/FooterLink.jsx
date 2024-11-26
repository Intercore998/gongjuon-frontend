
import links from "@assets/json/FooterLinks.json"
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import LinkItem from "@/StyledUIComponent/swiper/items/LinkItem.jsx";

const FooterLink = () => {

    return(
        <>
            <section className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <Swiper
                        slidesPerView={2}
                        modules={[Autoplay]}
                        speed={800}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="flex justify-center"
                        breakpoints={{
                            800: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                                loop: false,
                                autoplay: false,
                            },
                        }}
                    >
                        {links.map((link, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <LinkItem link={link.link} alt={link.alt} img={link.img} />
                            </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default FooterLink;