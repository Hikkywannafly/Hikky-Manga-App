import React from 'react'
import classNames from 'classnames';
import { DescriptionProps } from './Description'
import Description from './Description';
import { Editor } from "@tiptap/react";
export interface MediaDescriptionProps extends DescriptionProps {
    containerClassName?: string;

}

const MediaDescription: React.FC<MediaDescriptionProps> = ({
    description,
    className,
    containerClassName,
    ...props
}) => {

    const [isDescriptionExpanded, setIsDescriptionExpanded] = React.useState(false);

    const handleClick = React.useCallback(() => {
        setIsDescriptionExpanded(isDescriptionExpanded => !isDescriptionExpanded);
    }, [])

    const ref = React.useRef<Editor>(null);
    return (
        <>
            <div className={classNames('group relative  ', containerClassName)}>
                <Description
                    ref={ref}
                    readOnly
                    className={classNames(
                        isDescriptionExpanded ? "line-clamp-none" : "line-clamp-6",
                        className
                    )}
                    containerProps={{
                        onClick: handleClick
                    }}
                    description={description}
                    {...props}
                />
                {
                    !isDescriptionExpanded && (

                        <button className=' font-semibold bg-gradient-to-t from-[#0d1117] via-[#0d1117]/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 absolute  bottom-0 w-full h-full text-center' onClick={handleClick}>
                            Xem thêm
                        </button>
                    )

                }
                {/* {
                    isDescriptionExpanded && (

                        <button className='font-semibold bg-gradient-to-t from-[#0d1117] via-[#0d1117]/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 absolute top-0 w-full h-full text-center' onClick={handleClick}>
                            Thu gọn
                        </button>
                    )
                } */}
                <button>

                </button>
            </div>
        </>
    )
};
export default MediaDescription