import React, {useState} from 'react'
import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'


export default function Accordion({title, header, content}:{
    title: string,
    header?: string,
    content: Array<string>
}) {

    const [isActive, setIsActive] = useState(false)


  return (
    <div className='accordion-item'>
        <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div className='accordion-icon'>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && 
            <div className='accordion-content'>
                {header && (
                <div className='font-bold'>{header}</div>
                )}
                {content.map( item =>(
                    <li>{item}</li>
                ))}
            </div>
        }
    </div>
  )
}
