import React from 'react'

export function Heading ({
    className,
    component = 'h2',
    children,
    
}:{ 
    component?: React.ElementType, 
    format?: boolean, 
    children: React.ReactNode,
    className?: string
}) {
    const Component = component;
  return (
    <Component className={className}>{children}</Component>
  )
}
