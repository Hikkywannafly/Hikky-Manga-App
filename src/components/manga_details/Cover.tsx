import React, { memo } from 'react'
import Image from '../shared/Image';
import { ImageProps } from 'next/image';


const Cover: React.FC<ImageProps> = ({ ...props }) => {
    return (
        <div className="aspect-w-2 aspect-h-3">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
                fill
                className='rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] '
                {...props}
            />
        </div>
    )
}
export default memo(Cover);