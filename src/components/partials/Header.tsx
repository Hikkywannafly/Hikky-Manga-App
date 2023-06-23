import React, { useState } from 'react'
import { HamburgerMenu } from '~/components/icons';
import { IoIosArrowDown } from 'react-icons/io'
import { GENRES_COMICS, RANKING_COMICS } from '~/constants';
import DropDown from '~/components/shared/DropDown';
import { HeaderSearch, HeaderUser } from '~/components/icons';
import Link from 'next/link'
type NavItemProps = {
    label: string,

}
const NavItem = ({ label }: NavItemProps) => (
    <li className="">
        <div className="flex hover:text-highlight opacity-80 items-center text-2xl uppercase font-bold cursor-pointer transform transition-all duration-300">
            {label}
        </div>
    </li>
)
const Header = () => {
    const [isOpenGenre, setIsOpenGenre] = useState(false);
    const [isOpenRanking, setIsOpenRanking] = useState(false);
    return (
        <React.Fragment>
            <header className="p-4 z-[999] px-2 top-0 left-0 w-full fixed ">
                <div className="mx-auto justify-between flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]">
                    {/* logo */}
                    <div className="flex items-center ">
                        <HamburgerMenu />
                        <Link href='/' className="font-semibold opacity-80 text-3xl cursor-pointer transform hover:scale-105 transition duration-300 ">
                            HikkyManga
                        </Link>

                    </div>
                    {/* navigation */}
                    <nav className=" hidden md:block">
                        <ul className="flex items-center space-x-8">
                            <li
                                onMouseEnter={() => { setIsOpenGenre(true) }}
                                onMouseLeave={() => { setIsOpenGenre(false) }}
                                className="cursor-pointer relative  transform transition duration-300 ">
                                <div className={`flex gap-1 opacity-80 items-center text-2xl uppercase font-bold ${isOpenGenre ? 'text-highlight' : null}`}>
                                    Thể loại <IoIosArrowDown className="w-6 h-6 font-bold" />
                                </div>
                                <DropDown options={GENRES_COMICS} show={isOpenGenre} isMore={true} />
                            </li>
                            <li
                                onMouseEnter={() => { setIsOpenRanking(true) }}
                                onMouseLeave={() => { setIsOpenRanking(false) }}
                                className="cursor-pointer transform transition duration-300 ">
                                <div className={`flex gap-1 opacity-80 items-center text-2xl uppercase font-bold ${isOpenRanking ? 'text-highlight' : null}`}>
                                    Xếp hạng <IoIosArrowDown className="w-6 h-6 font-bold" />
                                </div>
                                <DropDown options={RANKING_COMICS} show={isOpenRanking} isMore={false} />
                            </li>
                            <NavItem label="Truyện mới" />
                            <NavItem label="Ủng hộ" />
                            <NavItem label="Tin Tức" />
                        </ul>
                    </nav>
                    {/* search */}
                    <div className="flex gap-3 ">
                        <HeaderSearch />
                        <HeaderUser />
                    </div>
                </div>
            </header>
        </React.Fragment >
    )
}

export default Header