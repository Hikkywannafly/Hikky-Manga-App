import React from 'react'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'
type Props = {}

const HeaderSearch = (props: Props) => {
    return (
        <div className='ml-16 flex h-[40%] w-fit items-center justify-between rounded-2xl  bg-secondary text-white lg:w-[68%]'>
            <input
                readOnly
                className="hidden w-[80%] bg-transparent mx-4 placeholder:text-white md:block"
                placeholder="Tìm truyện..."

            />
            <div className=" mx-3 flex gap-2 text-base">
                <div className="hidden rounded-lg bg-tertiary px-2 py-1  transition-all  md:block">
                    Ctrl
                </div>
                <div className="hidden rounded-lg bg-tertiary px-2 py-1  transition-all  md:block">
                    K
                </div>
            </div>

            <button
                className="h-full w-fit rounded-2xl p-4 hover:cursor-pointer hover:opacity-60"

            >
                <IoIosSearch className="h-8 w-8" />
            </button>
        </div>
    )
}

export default HeaderSearch