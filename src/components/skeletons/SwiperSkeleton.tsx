import React from 'react'
import Skeleton, { SkeletonItem } from '../shared/Skeleton';
export default function SwiperSkeleton() {
    return (
        <Skeleton className=' m-2 md:m-0 snap-x snap-mandatory overflow-x-auto flex w-full translate-y-[calc(5rem)] md:translate-y-[calc(7rem)] relative z-10 hide-scrollbar gap-4 snap px-2 select-none scroll-smooth'>
            <SkeletonItem container className='flex-none max-w-screen-md lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 
        w-full rounded-xl  overflow-hidden relative z-10 snap-center snap-always transition mx-auto '  >
                <canvas width="16" height="9" className="md:hidden rounded-lg w-full brightness-75 transition duration-500"
                ></canvas>
                <canvas width="32" height="15" className="hidden md:block rounded-lg w-full brightness-75 transition duration-500"
                >
                </canvas>
            </SkeletonItem>
        </Skeleton>


    )
}
