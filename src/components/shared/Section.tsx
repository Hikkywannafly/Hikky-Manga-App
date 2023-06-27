import React from 'react'
import classNames from "classnames";
export interface SectionProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
    isLoading?: boolean;
    hasPadding?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ children, title, className, hasPadding = true }, ref) => {
    return (
        <div
            ref={ref}
            className={classNames(hasPadding && "px-4 md:px-12 lg:px-20 xl:px-56 2xl:px-64", className)}
        >
            {
                title && (<></>)
            }
            {children}
        </div>
    )

}
);

Section.displayName = "Section";
export default Section;