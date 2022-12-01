import React from 'react'
import {Heading} from './Heading'


export default function Section({
    styles,
    Component = 'section',
    fullWidth,
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
    headingMargin?: string,
    fullWidth?: boolean
}) {
  return (
    <Component className={styles}>
        {fullWidth ?( 
            <div className='container mx-auto'>
                <SectionContent heading={heading}>
                    {children}
                </SectionContent>
            </div>
        ):(
            <SectionContent heading={heading}>
                {children}
            </SectionContent>
        )}
    </Component>
  )
}


function SectionContent ({heading, headingType, children, ...props}:{
    heading?: string,
    headingType?: React.ElementType,
    children: React.ReactNode,
})
    {
    return (
        <div className='flex items-center justify-center'>
            <div className='content w-full'>
                {heading && (
                    <Heading component={headingType} {...props}>
                        {heading}
                    </Heading>  
                )}
                {children}
            </div>
        </div>
    )
}