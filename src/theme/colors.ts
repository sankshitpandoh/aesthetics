export const defaultGradientMakers = {
	gradStartColor1: "#5682e6",
	gradEndColor1: "#e19cc1",
    gradStartColor2: "#5081e8",
    gradEndColor2: "#ed9ebd",
	glowColor: "#fff",
}

export const colorProvider = {
    mainDark: (x: number) =>  `rgba(0,0,0, ${x || 1})`,
    primaryGradient: `linear-gradient(104deg, ${defaultGradientMakers.gradStartColor2}, ${defaultGradientMakers.gradEndColor2} 101%)`,
    primaryGradientInverted: `linear-gradient(104deg, ${defaultGradientMakers.gradEndColor2}, ${defaultGradientMakers.gradStartColor2} 101%)`,
    glowEffect: `linear-gradient(${defaultGradientMakers.glowColor} 0 0) content-box, linear-gradient(${defaultGradientMakers.glowColor} 0 0)`,

    hoverBackground: `#b291c7`,
    borderColor1: `#a98acf`,

    primaryTextColor: `#f0f0f0`,
    
}



