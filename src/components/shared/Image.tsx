import React, { useState, useCallback, memo } from 'react';
import NextImage, { ImageProps as NextImageProps, ImageLoader } from 'next/image';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

interface ImageProps extends NextImageProps {
    containerClassName?: string;

}

const Image: React.FC<ImageProps> = ({ onLoadingComplete, ...props }) => {

    const { containerClassName } = props;

    const [isLoaded, setIsLoaded] = useState(false)

    const handleLoadingComplete: NextImageProps["onLoadingComplete"] = (
        useCallback((result) => {
            setIsLoaded(true);
            onLoadingComplete?.(result);

        }, [onLoadingComplete]))


    return (
        <motion.div
            variants={variants}
            initial='hidden'
            animate={isLoaded ? 'visible' : 'hidden'}
            className={containerClassName}
        >
            <NextImage
                onLoadingComplete={handleLoadingComplete}
                {...props}
            >

            </NextImage>

        </motion.div>


    )
}

export default memo(Image);