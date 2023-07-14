import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io'
import { BaseSyntheticEvent, } from 'react';
export type DropDownItem = {
    label: string,
    href: string,
}

export interface DropDownProps {
    options: DropDownItem[],
    show: boolean,
    isMore: boolean,
}

const DropDown: React.FC<DropDownProps> = (({
    options,
    show,
    isMore,
}) => {

    const [offsetTop, setOffsetTop] = useState(0);

    const effectActive = useRef<any>(null);

    useEffect(() => {
        if (effectActive.current) {
            effectActive.current.style.cssText = `transform: translateY(${offsetTop}px)`;
        }
    }, [offsetTop]);

    if (!show) return null;

    return (
        <ul
            className="animate-fade absolute top-full left-1/2 z-50 flex h-fit w-fit -translate-x-1/2 flex-col flex-nowrap items-center justify-evenly rounded-2xl bg-slate-800  py-1 transition-all "
            onMouseLeave={() => {
                setOffsetTop(0);
            }}
        >
            {options.length &&
                options.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onMouseEnter={(e: BaseSyntheticEvent) => {
                                setOffsetTop(e.currentTarget.offsetTop);
                            }}
                        >
                            <div>
                                <Link href={item.href} className="absolute-center mx-2 my-2 h-12 whitespace-nowrap px-3 hover:text-highlight duration-300">
                                    {item.label}
                                    {isMore &&
                                        index === options.length - 1 && (
                                            <IoIosArrowForward className="h-6 w-6" />
                                        )}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            <li
                // bg-[#555759]
                ref={effectActive}
                className={`slide absolute top-2 -z-10 h-12 w-[85%] ${offsetTop === 0 && 'opacity-0'
                    } rounded-2xl bg-slate-600  px-6 duration-150`}
            ></li>
        </ul>

    )
});

export default DropDown