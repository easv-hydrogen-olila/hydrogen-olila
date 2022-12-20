import React, {useState} from 'react'
import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'


export default function Accordion({title, header, content}:{
    title: string,
    header?: string,
    content: Array<string>
}) {

    const [isActive, setIsActive] = useState(false)


  return (
    <Disclosure>
    {({ open }) => (
      /* Use the `open` state to conditionally change the direction of an icon. */
      <div className='px-8 flex flex-col justify-center md:block text-white py-3'>
        <Disclosure.Button className='w-full my-4'>
            <div className='flex justify-between'>
                <div className='uppercase text-lg'>{title}</div>
                <div className='md:hidden'>
                    <ChevronRightIcon className={`${ open ? 'rotate-90 transform' : '' } h-6`} />
                </div>
            </div>
        </Disclosure.Button>
        <div className={`${
          open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
          } overflow-hidden transition-all duration-300`}>
            <Disclosure.Panel static>
            {content.map( item =>(
              <li className='list-none py-1'>{item}</li>
          ))}
            </Disclosure.Panel>
        </div>
      </div>
    )}
    </Disclosure>
  )
}
