import React from 'react'
import Link from 'next/link'
type Props = {
    link?: string;
    title
}

function Tag({
    link,
    title
}: Props) {
    return (
        <div className='h-10 px-4 py-0.5 bg-gray-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:-translate-y-1 duration-500  hover:scale-103 items-center font-semibold '>
            <Link href={link} >
                {title}
            </Link>
        </div>
    )
}

export default Tag