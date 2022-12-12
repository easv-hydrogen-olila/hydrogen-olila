import { useState, Fragment } from 'react'
import { useProductOptions, AddToCartButton, Money, Link } from '@shopify/hydrogen';
import { Product } from '@shopify/hydrogen/storefront-api-types';
import { Heading } from '../elements/Heading';
import { RadioGroup, Disclosure } from '@headlessui/react';
import {ChevronRightIcon} from '@heroicons/react/24/outline'

const SIZE_GUIDE_URL = 'https://luksusbaby.com/images/brands/st%C3%B8rrelse%20guide%20en.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductForm({product}:{product: Product}) {
    const {media, title, vendor, descriptionHtml, id, productType} = product;
    const {
      priceV2,
      compareAtPriceV2,
      id: variantId,
      sku,
      title: variantTitle,
    } = product.variants.nodes[0];
    const {options, setSelectedOption, selectedOptions, selectedVariant} = useProductOptions();


    const isOutOfStock = !selectedVariant?.availableForSale || false;
    
    return (
        <div>
            <Heading component='h3' className='uppercase my-3 text-clr_navigation font-bold text-2xl'>
                {title}
            </Heading>

            {/* Product variations */}
            <GridComponent product={product} />

            {/* Product price, delivery time and size guide */}
            <div className='grid grid-cols-1 md:grid-cols-2 my-2'>
              <div className='my-2 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center'>
                   {compareAtPriceV2 && (
                    <div className='flex line-through text-sm font-light text-clr_navigation whitespace-nowrap'>
                      <span>Normalpris &nbsp;</span>
                      <Money withoutTrailingZeros data={compareAtPriceV2} />
                    </div>
                  )}
                <div className='text-clr_primary text-2xl font-bold'>
                  <Money withoutTrailingZeros data={priceV2} />
                </div>
              </div>
              <div className='flex text-center w-full justify-center md:justify-start my-2'>
                  <AddToCartButton disabled={isOutOfStock} className='w-full'>
                    <div className={classNames(
                      isOutOfStock
                        ? 'bg-clr_grey_bg text-gray-500 '
                        : 'text-white bg-gradient-to-r from-[#EAB787] to-[#9A684B] hover:bg-gradient-to-r hover:from-[#87BAEA] hover:to-[#4B7D9A]',
                        'w-full px-10 py-4 uppercase rounded-full my-2 '
                    )}>
                        {isOutOfStock ? 'Udsolgt' : 'LÆG I KURV'}
                    </div>
                  </AddToCartButton>
              </div>
              <div className='flex flex-col items-center md:items-start space-y-4 text-clr_navigation text-base md:text-xs'>
                <div className='uppercase underline hover:font-bold'>
                  <Link to={SIZE_GUIDE_URL}>
                    STØRRELSESGUIDE
                  </Link>
                </div>
                <div className='uppercase font-bold text-center md:text-start flex flex-col'>
                    <span>Fri fragt over 399 kr</span>
                    <span>Hurtig levering 1-2 hverdage</span>
                </div>
              </div>
            </div>
            {/* <DiscloruseMenu/> */}

            {/* Product descripion */}
            <div className='bg-clr_grey_bg p-4 my-6' dangerouslySetInnerHTML= {{ __html: product.descriptionHtml}} ></div>

        </div>
    )
}

export function GridComponent({product}:{product: Product}) {
  const {options, selectedVariant, selectedOptions, setSelectedOption, isOptionInStock} = useProductOptions();
  console.log(options)
  
  return (
    <>
      {options?.map(({name, values}) =>{ 
        // When there is no variants
      if (values.length === 1) {
        return null
      }
      return (
        <fieldset key={name}>
          <legend className='uppercase text-clr_navigation font-bold text-sm my-2'>{name}</legend>
          <div className={`grid gap-2 ${values.length > 5 ? 'grid-5': 'grid-cols-3 md:grid-flow-col' }`}>
            {values.map((value) =>{
              const checked = selectedOptions![name] === value;
                return (
                  <label htmlFor={`option[${name}][${value}]`}>
                    <input
                      type="radio"
                      id={`option[${name}][${value}]`}
                      name={`option[${name}]`}
                      checked={checked}
                      disabled={!isOptionInStock(name,value)}
                      onChange={() => setSelectedOption(name, value)}
                      className='hidden'
                    />
                    <div 
                      className={classNames(
                        !isOptionInStock(name,value)
                          ? 'cursor-not-allowed bg-[#e7e7e7] text-gray-300 font-bold hover:ring-0 '
                          : '',
                        checked
                          ? 'bg-clr-variant'
                          : 'border-transparent',
                          'relative border rounded-md py-3 px-3 text-clr_navigation font-semibold bg-clr_variant_dropdown flex items-center justify-center text-sm uppercase hover:ring-2 hover:ring-clr_primary_complement cursor-pointer focus:outline-none sm:flex-1 border-gray-400'
                      )}
                      >
                      {value}
                    </div>
                  </label>
                )
              } 
            )}
          </div>
        </fieldset>
      )}
      )}
    </>
  );
}


function DiscloruseMenu() {
  return (
      <Disclosure>
        {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
        {({open}) => (
          <>
            <Disclosure.Button className="text-left md:cursor-default">
              <Heading className="flex justify-between" size="lead" as="h3">
                {item.title}
                {item?.items?.length > 0 && (
                  <span className="md:hidden">
                    <IconCaret direction={open ? 'up' : 'down'} />
                  </span>
                )}
              </Heading>
            </Disclosure.Button>
            {item?.items?.length > 0 && (
              <div
                className={`${
                  open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                } overflow-hidden transition-all duration-300`}
              >
                <Disclosure.Panel static>
                  <nav className={styles.nav}>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.to}
                        target={subItem.target}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </nav>
                </Disclosure.Panel>
              </div>
            )}
          </>
        )}
      </Disclosure>
  )
}