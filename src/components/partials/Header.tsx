import React from 'react'
import { HamburgerMenu } from '~/components/icons';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { GENRES_COMICS } from '~/constants';
import DropDown from '~/components/shared/DropDown';
const Header = () => {
    return (
        <React.Fragment>
            <header className="py-4">
                <div className="mx-auto justify-between flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]">
                    {/* logo */}
                    <div className="flex items-center ">
                        <HamburgerMenu />
                        <div className="font-semibold text-3xl cursor-pointer transform hover:scale-105 transition duration-300 ">
                            HikkyManga
                        </div>
                    </div>
                    {/* navigation */}
                    <nav className="">
                        <ul className="flex items-center space-x-8">
                            <li className="text-2xl uppercase font-semibold cursor-pointer transform  transition duration-300 ">
                                <div className="flex gap-1 items-center">
                                    Thể loại <IoIosArrowDown className="w-6 h-6 font-bold" />
                                </div>
                                <DropDown options={GENRES_COMICS} show={true} isMore={false} />

                            </li>
                            <li className="text-2xl uppercase font-semibold cursor-pointer transform  transition duration-300 ">
                                HOT
                            </li>
                            <li className="text-2xl uppercase font-semibold cursor-pointer transform  transition duration-300 ">
                                Ủng hộ
                            </li>
                            <li className="text-2xl uppercase font-semibold cursor-pointer transform  transition duration-300 ">
                                FANPAGE
                            </li>
                            <li className="text-2xl uppercase font-semibold cursor-pointer transform  transition duration-300 ">
                                TIN TỨC
                            </li>
                        </ul>

                    </nav>
                    <div className="">
                        Search
                    </div>

                </div>
            </header>
        </React.Fragment >
    )
}

export default Header