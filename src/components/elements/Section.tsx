import React from 'react'
import {Heading} from './Heading'


export default function Section({
    styles,
    Component = 'section',
    headingType,
    headingMargin,
    children,
    heading,
    ...props
}: {
    Component?: React.ElementType,
    children: React.ReactNode,
    styles?: string,
    heading?: string,
    headingType?: React.ElementType,
    headingMargin?: string
}) {
  return (
    <Component className={styles}>
        {heading && (
            <Heading component={headingType} {...props}>
                {heading}
            </Heading>  
        )}
        {children}
    </Component>
  )
}
