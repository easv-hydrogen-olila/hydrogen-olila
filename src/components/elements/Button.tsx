import React from 'react'

type Props = {
    children?: React.ReactNode 
    type: "button" | "submit" | "reset" | undefined,
    buttonStyle?: string,
    buttonSize?: string,
}

// Fallback default
const STYLES = [
    //Hero button
    "btn--hero--primary",
    "btn--primary--rounded",
    "btn--primary",
    "btn--secondary",
    "btn--footer"
]

const SIZES = ["btn--large","btn--medium", "btn--small", "btn--max-w"]

const Button: React.FC<Props> = ({
    children, 
    type, 
    buttonStyle = STYLES[0],
    buttonSize = SIZES[0],
    ...props

}) => {

    //Fall back options in case the style/size isn't defined
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize} `} 
        type={type}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button