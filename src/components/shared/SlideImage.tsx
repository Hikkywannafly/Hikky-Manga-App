import React from 'react'

interface SlideImageProps {
    title?: string,
    description?: string,
    image: string,
    link?: string
}

const SlideImage = ({
    title,
    description,
    image,
    link
}: SlideImageProps) => {
    return (
        <div className="flex-none max-w-screen-md lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 
        w-full rounded-xl  overflow-hidden relative z-10 snap-center snap-always transition mx-auto" >

            <img className="absolute w-full h-full top-0 left-0 object-cover object-center rounded-lg z-10 bg-hero brightness-75" src={`${image}`} alt="" />

            <div className="absolute top-0 left-0 w-full h-full bg-hero z-10 rounded-xl"></div>

            <canvas width="16" height="9" className="md:hidden rounded-lg w-full brightness-75 transition duration-500"
                style={{ boxShadow: `rgba(100, 47, 14, 0.314) 0px 6px 20px 2px`, backgroundColor: ` rgb(17, 24, 39)` }}></canvas>
            <canvas width="32" height="15" className="hidden md:block rounded-lg w-full brightness-75 transition duration-500"
                style={{ boxShadow: `rgba(100, 47, 14, 0.314) 0px 6px 20px 2px`, backgroundColor: ` rgb(17, 24, 39)` }}>

            </canvas>
            {/* info comic */}
            <div className="absolute w-full bottom-0 left-0 flex justify-between items-center p-3 md:p-6 z-10 ">
                <div className="flex flex-col gap-1 lg:gap-2 w-full overflow-hidden">
                    <div className="max-w-[34rem] flex-0">
                        <a href="/mangas/136" className="">
                            <h2 className="font-head font-bold overflow-ellipsis whitespace-nowrap overflow-hidden md:overflow-auto md:whitespace-normal break-words text-xl md:text-2xl lg:text-3xl text-white  tracking-wider">
                                Bungou Stray Dogs (FULL HD)
                            </h2>
                        </a>
                    </div>
                    <div className="flex-1 flex-grow max-w-[42rem]">
                        <p className="w-full overflow-ellipsis whitespace-nowrap overflow-hidden md:overflow-auto md:whitespace-normal font-subhead font-light break-words text-white  text-base md:text-lg lg:text-2xl">
                            Nakajima Atsushi đang trên bờ vực của cái chết thì quyết định đi cướp để tự cứu sự sống của mình. Nhưng cậu cứu phải Dazai Osamu.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block flex-0 whitespace-nowrap">
                    <a href="/mangas/136" className="inline-block button bg-blue-600 hover:bg-blue-800 bg-opacity-50 hover:bg-opacity-50 text-white px-2 md:px-8 py-1 md:py-2 text-sm uppercase font-bold">
                        Xem thông tin
                    </a>
                </div>
            </div>

        </div >


    )
}

export default SlideImage