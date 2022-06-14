import styled, { keyframes } from "styled-components"
import { colorProvider, defaultGradientMakers } from "../../theme/colors";
import { ButtonProps } from "./Button";


const glowingHover = keyframes`
    from {
        box-shadow: 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor1}, 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor1} inset, 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor2}, 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor2} inset;
    }
    to {
        box-shadow: 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor2}, 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor2} inset, 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor1}, 0px 0px 12px -5px ${defaultGradientMakers.gradStartColor1} inset;
    }
`

const borderEffect = keyframes`
    from {
        padding: 0px;
    }
    to {
        padding: 2px;
    }
`

const borderGradShift = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const GradientGlowButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    font-size: 14px;
    background-image: ${colorProvider.primaryGradient};
    color: ${colorProvider.primaryTextColor};
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    box-shadow: none;
    &:hover {
        background: transparent;
        background-image: ${colorProvider.primaryGradient};
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent !important;
        border-radius: 5px;
        animation: ${glowingHover} 1.5s infinite;
        & $img {
            filter:
                brightness(1.95) contrast(1.55) hue-rotate(321deg) invert(0.23) saturate(3) sepia(0.04);
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 5px;
            padding: 2px;
            background: ${colorProvider.primaryGradient};
            mask: ${colorProvider.glowEffect};
            -webkit-mask-composite: destination-out;
            animation:
                ${borderEffect} 0.5s, ${borderGradShift} 1.5s ease-in-out -1.5s infinite alternate;
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 5px;
            padding: 2px;
            background: ${colorProvider.primaryGradientInverted};
            mask: ${colorProvider.glowEffect};
            -webkit-mask-composite: destination-out;
            animation:
                ${borderEffect} 0.5s, ${borderGradShift} 1.5s ease-in-out 0s infinite alternate;
        }
    }
`

export const OutlinedGradientButton = styled.button<ButtonProps>`
    border: 0;
    background: transparent;
    color: ${colorProvider.primaryTextColor};
    line-height: 1;
    text-transform: none;
    transition: 0.5s ease-in-out;
    box-shadow: none;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    position: relative;
    &:hover {
        background: #b291c7;
        border-radius: 5px;
        box-shadow: none;
        &:before {
            display: none;
        }
    }
    &:before {
        content: '';
        position: absolute;
        box-shadow: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 5px;
        padding: 2px;
        background: ${colorProvider.primaryGradientInverted};
        mask: ${colorProvider.glowEffect};
        -webkit-mask-composite: destination-out;
    }
`


export const OutlinedSolidButton = styled.button<ButtonProps>`
    line-height: 1;
    font-size: 14px;
    background: ${colorProvider.borderColor1};
    color: ${colorProvider.mainDark(0.87)};
    color: ${colorProvider.primaryTextColor};
    text-transform: none;
    transition: 0.5s ease-in-out;
    box-shadow: none;
    padding: 9px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${colorProvider.borderColor1};
    &:hover {
        background-color: transparent;
        box-shadow: none;
        color: ${colorProvider.borderColor1};
    }
    "&:disabled": {
        backgroundColor: themeColorProvider("helperColor13", 0.2),
        color: themeColorProvider("mainColorDark", 0.5) + " !important",
        border: "1px solid transparent",
        boxShadow: "none",
        cursor: "not-allowed",
        "&:hover": {
            backgroundColor: themeColorProvider("helperColor13", 0.2),
            color: themeColorProvider("mainColorDark", 0.5),
            border: "1px solid transparent",
            boxShadow: "none",
            cursor: "not-allowed",
        },
    },
`

export const DefaultButton = styled.button<ButtonProps>`
    background: ${colorProvider.helperColor2(0.15)};
    color: ${colorProvider.helperColor3};
    text-transform: none;
    transition: 0.5s ease-in-out;
    box-shadow: none;
    padding: 9px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${colorProvider.helperColor2(0.15)};
    &:hover {
        background-color: ${colorProvider.helperColor4(0.15)};
        boxShadow: none;
        color: ${colorProvider.helperColor2(1)};
    }
    &:disabled {
        background-color: ${colorProvider.helperColor4(0.2)};
        color: ${colorProvider.primaryTextColor};
        opacity: 0.7;
        border: 1px solid transparent;
        box-shadow: none;
        cursor: not-allowed;
        &:hover {
            background-color:  ${colorProvider.helperColor4(0.2)};
            color: ${colorProvider.mainDark(0.5)};
            border: 1px solid transparent;
            box-shadow: none;
            cursor: not-allowed;
        },
    },
`