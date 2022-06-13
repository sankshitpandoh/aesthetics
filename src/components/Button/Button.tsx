import React, { MouseEvent, MouseEventHandler } from "react";
import { GradientGlowButton, OutlinedGradientButton, OutlinedSolidButton } from "./variants";

export interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    label?: string
    children?: React.ReactNode
    style?: React.CSSProperties
    variant? : 'gradGlow' | 'gradOutline' | 'solidOutline'
}


const Button = (props: ButtonProps) => {

    const clickerNotPassed = (_e: MouseEvent) => {
        console.log("No action defined for 'onClick' attr of Button")
    }

    const VariantDecider = (dataProps: ButtonProps) => {
        switch (variant) {
            case 'gradGlow':
                return <GradientGlowButton {...dataProps} />
            case 'gradOutline':
                return <OutlinedGradientButton {...dataProps} />
            case 'solidOutline':
                return <OutlinedSolidButton {...dataProps} />
            default:
                return <GradientGlowButton {...dataProps} />
        }
    }

    const {
        children,
        label='',
        onClick=clickerNotPassed,
        variant="gradGlow",
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