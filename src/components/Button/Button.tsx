import React from "react";

export interface ButtonProps {
    clicker: (e: React.MouseEvent) => Event,
    removeConsole?: boolean
    label?: string
    children?: React.ReactNode
    style?: React.CSSProperties

}

const Button = (props: ButtonProps) => {

    const clickerNotPassed = () => {
        if (props.removeConsole) {
            console.log("No action defined for 'onClick' attr of Button")
        }
        return () => null;
    }
    const {
        children,
        clicker = clickerNotPassed(),
        label = "",
        style = {},
        ...other
    } = props;


    return (
        <button
            onClick={(e) => clicker(e)}
        >
            {
                children || label
            }
        </button>
    )
}

export default Button;