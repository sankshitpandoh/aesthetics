import React, { MouseEventHandler } from "react";
import { GradientGlowButton, OutlinedGradientButton } from "./variants";

export interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    removeErrorConsole?: boolean
    label?: string
    children?: React.ReactNode
    style?: React.CSSProperties
    variant? : 'gradGlow' | 'gradOutline'
}


const Button = (props: ButtonProps) => {

    const clickerNotPassed = () => {
        if (!props.removeErrorConsole) {
            console.log("No action defined for 'clicker' attr of Button")
        }
        return () => null;
    }

    const VariantDecider = (dataProps: ButtonProps) => {
        switch (variant) {
            case 'gradGlow':
                return <GradientGlowButton {...dataProps} />
            case 'gradOutline':
                return <OutlinedGradientButton {...dataProps} />
            default:
                return <button {...dataProps} />
        }
    }

    const {
        children,
        onClick = clickerNotPassed(),
        label = "",
        variant = "glow",
        ...other
    } = props;

    return (
        <VariantDecider
            onClick={(e) => onClick(e)}
            style={props?.style || {}}
            {...other}
        >
            {
                children || label
            }
        </VariantDecider>
    )
}

export default Button;