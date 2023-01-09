import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Lazy } from 'swiper';
import { SlideImage } from "~/components/shared";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { curentImageBannerAtom } from "~/store";
import { useSetAtom } from "jotai";
import { FAKE_BANNER } from "~/constants/testData";

interface SwiperBannerProps {
    BannerList?: any,
}

const SwiperBanner = ({
    BannerList = FAKE_BANNER
}: SwiperBannerProps) => {
    const setCurrentImage = useSetAtom(curentImageBannerAtom);
    return (

        <div className="m-2 md:m-0 snap-x snap-mandatory overflow-x-auto flex w-full translate-y-[calc(5rem)] md:translate-y-[calc(7rem)] relative z-10 hide-scrollbar gap-4 snap px-2 select-none scroll-smooth">
            <Swiper
                onSlideChange={(swiperCore) => {
                    let { activeIndex } = swiperCore;
                    if (activeIndex == 6) activeIndex = 1;
                    setCurrentImage(FAKE_BANNER[activeIndex - 1]?.src)
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                effect={'fade'}
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                modules={[EffectFade, Autoplay, Pagination, Lazy]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >

                {
                    FAKE_BANNER.map((item: any) =>
                    (
                        <SwiperSlide

                            key={item.title}>

                            <SlideImage title={item.title} image={item.src} />
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </div >
    )
}

export default SwiperBanner