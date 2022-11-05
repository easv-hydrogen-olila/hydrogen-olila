import React from 'react'

type Props = {
    children?: React.ReactNode 
    type: "button" | "submit" | "reset" | undefined,
    buttonStyle: string,
    buttonSize: string
}

// Fallback default
const STYLES = [
    //Hero button
    "btn--hero--primary",
]

const SIZES = ["btn--medium", "btn--small"]

const Button: React.FC<Props> = ({
    children, 
    type, 
    buttonStyle,
    buttonSize
}) => {

    //Fall back options in case the style/size isn't defined
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
        type={type}
    >
        {children}
    </button>
  )
}

export default Button