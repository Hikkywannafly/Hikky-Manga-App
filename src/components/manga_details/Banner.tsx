import React from 'react'
import Image from '~/components/shared/Image'
type Props = {
    banner?: string,
    title: string
}

const BannerIntroduct = ({ banner, title }: Props) => {
    return (
        <div className='relative z-0 w-full h-[200px] md:h-[400px]'>
            <Image
                src={banner}
                alt={title}
                fill={true}
                style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
            />
            <div className='banner__overlay absolute inset-0 z-10'></div>
        </div>
    )
}
export default BannerIntroduct;