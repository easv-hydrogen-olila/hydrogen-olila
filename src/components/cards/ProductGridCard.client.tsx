import React from 'react'
import { Link, Image, Money } from '@shopify/hydrogen'
import type { Product, Image as ImageType} from '@shopify/hydrogen/storefront-api-types'
import { getVendorFromTitle } from '../../lib/utils'



export default function ProductGridCard({product}:{
    product: Product
}) {
    const {id, title, handle, featuredImage, variants} = product
    const {priceV2, compareAtPriceV2} = variants.nodes[0]
    const {vendor, productTitle} = getVendorFromTitle(title)

  return (
    
    <div className='relative bg-white p-2 h-full rounded-lg pb-7'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white rounded-t-lg xl:aspect-w-7 xl:aspect-h-8">
            {featuredImage && (
                <Image
                data={featuredImage || undefined}
                alt={featuredImage.altText || `Image of ${title}`}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                )
            }
        </div>
        <div className='flex flex-col px-2 items-center bg-white my-2 rounded-b-lg text-[12px] space-y-1 uppercase font-bold text-clr_navigation'>
            <Link key={id} to={`/products/${handle}`} className="group">
                <div className='flex flex-col items-center text-center h-20 hover:underline'>
                    <span className="text-center text-sm">{vendor}</span>
                    <span className="text-center text-sm">{productTitle}</span>
                </div>
            </Link>
            <div className='text-xl my-2 flex space-x-2 items-center'>
                <span><Money withoutTrailingZeros data={priceV2}/></span>
                {compareAtPriceV2 &&(
                    <span className='font-normal flex line-through text-sm whitespace-nowrap'> Før &nbsp; <Money withoutTrailingZeros data={compareAtPriceV2}/></span>
                )}
            </div>
        </div>
        <div className="absolute -bottom-4 right-1/2 translate-x-1/2">
            <Link 
            to={`/product/${handle}`}
            className="uppercase whitespace-nowrap p-2 px-6 text-xs text-white font-bold bg-white rounded-full
            bg-gradient-to-r from-clr_gold to-clr_primary
            hover:bg-gradient-to-r hover:from-[#87BAEA] hover:to-[#4B7D9A] ">Se mere
            </Link>
        </div>
    </div>
  )
}
