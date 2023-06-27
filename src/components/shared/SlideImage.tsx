import React from 'react'
import Image from '~/components/shared/Image'
import { Media } from '~/types/anilist'
import Link from 'next/link'
interface SlideImageProps {
    manga: Media
}

import parse from 'html-react-parser';
import { createMediaDetailUrl } from '~/utils';
const SlideImage = ({
    manga
}: SlideImageProps) => {
    const { title, description, bannerImage, coverImage } = manga;
    return (
        <div className="flex-none max-w-screen-md lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 
        w-full rounded-xl  overflow-hidden relative z-10 snap-center snap-always transition mx-auto" >
            <Image
                className=" top-0 left-0 object-cover object-center rounded-lg z-10 bg-hero brightness-75"
                // @ts-ignore
                src={bannerImage == null ? coverImage?.large : bannerImage}
                alt={title?.userPreferred || 'placeholder'}
                fill={true}

            />
            <div className="absolute top-0 left-0 w-full h-full bg-hero z-10 rounded-xl"></div>

            <canvas width="16" height="9" className="md:hidden rounded-lg w-full brightness-75 transition duration-500"
                style={{ boxShadow: `rgba(100, 47, 14, 0.314) 0px 6px 20px 2px`, backgroundColor: ` rgb(17, 24, 39)` }}></canvas>
            <canvas width="32" height="15" className="hidden md:block rounded-lg w-full brightness-75 transition duration-500"
            >
            </canvas>

            <div className="absolute w-full bottom-0 left-0 flex justify-between items-center p-3 md:p-10 z-10 ">
                <div className="flex flex-col gap-1 lg:gap-2 w-full overflow-hidden">
                    <div className="max-w-[100rem] flex-0">
                        <a href="/mangas/136" className="">
                            <h2 className="font-head font-bold overflow-ellipsis whitespace-nowrap overflow-hidden md:overflow-auto md:whitespace-normal break-words text-xl md:text-2xl lg:text-3xl text-white tracking-wider truncate">
                                {title?.userPreferred}
                            </h2>
                        </a>
                    </div>
                    <div className="flex-1 flex-grow max-w-[100rem]">
                        <p className="w-full overflow-ellipsis whitespace-nowrap overflow-hidden md:whitespace-normal font-light break-words text-white text-base md:text-xl lg:text-3xl line-clamp-2">
                            {
                                parse(description || '')
                            }
                        </p>
                    </div>
                </div>
                <div className="hidden md:block flex-0 whitespace-nowrap">
                    <Link href={createMediaDetailUrl(manga)}>
                        <div className="inline-block button bg-blue-600 hover:bg-blue-800 bg-opacity-50 hover:bg-opacity-50 text-white px-2 md:px-8 py-1 md:py-3 rounded-lg text-lg uppercase font-bold">
                            Xem thông tin
                        </div>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default SlideImage