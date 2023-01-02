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
    
return(
        <div className="group relative py-3 pb-10">
          <Link to={`/products/${handle}`}>
            <div className="h-[100px] md:h-[300px] flex items-stretch aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
              {featuredImage && (
                  <Image 
                      data={featuredImage || undefined}
                      alt= {featuredImage.altText || `Image of ${productTitle}`}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
              )}
            </div>
            <div className='md:h-28 flex relative flex-col uppercase text-base max-w-[220px]'>
                    <div className='font-bold'>{vendor}</div>
                    <div className='font-normal'>{productTitle}</div>
                  <div className='md:absolute bottom-0 font-semibold text-lg'>
                      <Money withoutTrailingZeros data={productVariant.priceV2}/>
                  </div>
            </div>
          </Link>
        </div>
)
}

export default ProductCard