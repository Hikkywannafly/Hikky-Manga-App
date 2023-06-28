import React from 'react'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'
import { useSetAtom } from 'jotai'
import { showSearchModalAtom } from '~/store'
type Props = {}

const HeaderSearch = (props: Props) => {
    const setShowSearchModal = useSetAtom(showSearchModalAtom)
    const handleShowSearchModal = () => {
        setShowSearchModal(true)
    }

    return (
        <div
            onClick={handleShowSearchModal}
            className='flex max-h-[35px]  w-fit items-center justify-between rounded-2xl bg-gray-800 lg:w-[68%]'>
            <input
                readOnly
                className="hidden w-[80%] bg-transparent mx-4 placeholder:text-white md:block"
                placeholder="Tìm truyện..."

            />
            <div className=" mx-3 flex gap-2 text-base">
                <div className="hidden rounded-lg bg-tertiary px-2 font-semibold py-1 md:block">
                    Ctrl
                </div>
                <div className="hidden rounded-lg bg-tertiary px-2 font-semibold py-1 md:block">
                    K
                </div>
            </div>

            <button
                className="h-full w-fit rounded-2xl px-4 hover:cursor-pointer hover:opacity-60"
            >
                <IoIosSearch className="h-8 w-8" />
            </button>
        </div>
    )
}

export default HeaderSearch