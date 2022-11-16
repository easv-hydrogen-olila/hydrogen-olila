import type {Product, Image as ImageType, ProductVariant} from '@shopify/hydrogen/storefront-api-types'
import {Image, Money, Link} from '@shopify/hydrogen'
import {getVendorFromTitle} from '../../lib'

interface Props {
    title: string,
    handle: string,
    description: string,
    featuredImage: ImageType,
}

//NOTE - https://shopify.dev/api/hydrogen/utilities/flattenconnection ProductCard.client

const ProductCard = ({data}: {data:Product}) => {
    const {title,handle, description, featuredImage, variants} = data

    //FIXME - Split the vendor from the title array in the server?
    const {vendor, productTitle} = getVendorFromTitle(title)

    //We get the variants of the product
    const {nodes} = variants
    //We save the first variant of the product
    const productVariant = nodes[0]
    

  return (
    <Link to={`/products/${handle}`}>
        <div className='flex flex-col items-center mx-5'>
            {featuredImage && (
                //FIXME - Images height aren't the same
                <Image 
                    data={featuredImage || undefined}
                    alt= {featuredImage.altText || `Image of ${title}`}
                    className='object-fit'
                    width={220}
                /> )
            }
            <div className='flex flex-col my-4 h-fit uppercase text-xs lg:text-base max-w-[220px]'>
                <p className='font-bold'>{vendor}</p>
                <p className='font-normal'>{productTitle}</p>
                <span className='font-semibold'>
                    <Money withoutTrailingZeros data={productVariant.priceV2}/>
                </span>
            </div>
        </div>
    </Link>

  )
}

export default ProductCard