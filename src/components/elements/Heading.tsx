import React from 'react'

const headers = ['h1', 'h2', 'h3', 'h4', 'h5']

//TODO Styles for different sections
const defaultStyle = 'text-clr_navigation uppercase font-bold text-2xl my-5'



export function Heading ({
    className,
    component = 'h2',
    children,
    ...props
}:{ 
    component?: React.ElementType, 
    format?: boolean, 
    children: React.ReactNode,
    className?: string
}) {
  //Check if component has a style as a prop 
  const checkHeadingStyle = className ? className : defaultStyle

  const Component = component;
  return (
    <Component {...props} className={checkHeadingStyle}>
      {children}
    </Component>
  )
}
