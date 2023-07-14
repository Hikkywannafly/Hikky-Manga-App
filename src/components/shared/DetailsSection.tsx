import React from 'react'
import classNames from 'classnames'

interface DetailsSectionProps {
    title: string;
    className?: string;
    containerClassName?: string;
    children?: React.ReactNode;
}

const DetailsSection: React.FC<DetailsSectionProps> = ((
    {
        title,
        className,
        children,
        containerClassName,
    }
) => {
    return (
        <div className={classNames('space-x-4 ', containerClassName)}>
            <p className='font-semibold text-2xl'> {title}  </p>
            <div className={classNames(className, ' ')}>
                {children}
            </div>

        </div>
    )
})

export default DetailsSection