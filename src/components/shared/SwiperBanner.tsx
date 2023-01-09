import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SlideImage } from "~/components/shared";
import 'swiper/css/effect-fade';


import "swiper/css/effect-fade";



// import required modules
import { Pagination } from "swiper";
type Props = {}

const SwiperBanner = (props: Props) => {

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
                loop={true}
                modules={[EffectFade, Autoplay, Pagination]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                <SwiperSlide>
                    <SlideImage image="https://storage-bravo.cuutruyen.net/file/cuutruyen/uploads/manga/136/panorama/processed-d0cc7ebb92eaf384adc02a49aadbd203.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImage image="https://storage-bravo.cuutruyen.net/file/cuutruyen/uploads/manga/5/panorama/processed-27a2f500934e7a3dadc7f47d15593f58.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImage image="https://storage-bravo.cuutruyen.net/file/cuutruyen/uploads/manga/5/panorama/processed-27a2f500934e7a3dadc7f47d15593f58.jpg" />
                </SwiperSlide>


            </Swiper>

        </div >
    )
}

export default SwiperBanner