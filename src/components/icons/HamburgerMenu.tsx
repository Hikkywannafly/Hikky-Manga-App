import React from 'react'


const HamburgerMenu = () => {
    return (
        <div className="block md:hidden">
            <div className="relative group flex flex-col justify-between w-[40px] h-[19px] transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 rounded-lg "></div>
                <div className="bg-white h-[2px] w-4 transform transition-all duration-300 rounded-lg group-hover:translate-x-4 "></div>
                <div className="bg-white h-[2px] w-8 transform transition-all duration-300 rounded-lg "></div>
            </div>

        </div>
    )

}

export default HamburgerMenu