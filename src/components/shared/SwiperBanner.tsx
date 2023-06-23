import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Lazy, Navigation } from 'swiper';
import { SlideImage } from "~/components/shared";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import { Media } from "~/types/anilist";

interface SwiperBannerProps {
    data?: Media[],
}

const SwiperBanner: React.FC<SwiperBannerProps> = (props) => {
    const { data } = props;
    return (
        <div className="m-2 md:m-0 snap-x snap-mandatory overflow-x-auto flex w-full translate-y-[calc(5rem)] md:translate-y-[calc(7rem)] relative z-10 hide-scrollbar gap-4 snap px-2 select-none scroll-smooth">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                effect={'fade'}
                fadeEffect={{
                    crossFade: true,
                }}
                loop={false}
                modules={[EffectFade, Autoplay, Pagination, Lazy]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {
                    data?.map((item: Media) =>
                    (
                        <SwiperSlide
                            key={item.id}
                            className="w-40 h-64"
                        >
                            <SlideImage manga={item} />
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>


        </div >

    )
}

export default SwiperBanner