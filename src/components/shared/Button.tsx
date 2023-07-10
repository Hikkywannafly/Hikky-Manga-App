import classNames from "classnames";
import React from "react";
import BaseButton, { BaseButtonProps } from "~/components/shared/BaseButton";

interface ButtonProps extends BaseButtonProps {
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    secondary,
    ...props
}) => {
    return (
        <BaseButton
            type="button"
            className={classNames(
                "bg-opacity-50 hover:bg-opacity-60 text-white px-1 md:px-2 py-1 md:py-5 rounded-xl font-bold",
                className,
                props.primary && "hover:bg-blue-800",
                secondary && "bg-transparent hover:bg-blue-800"
            )}
            {...props}
        >
            {children}
        </BaseButton>
    );
};

export default Button;
