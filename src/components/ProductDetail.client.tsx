import { MediaFile, ProductOptionsProvider } from '@shopify/hydrogen'
import type { Product, Media } from '@shopify/hydrogen/storefront-api-types'
import ProductForm from './product/ProductForm.client';
import {ProductGallery} from './product/ProductGallery.client';

export function ProductDetail({product}:{product: Product}) {

  return (
    <ProductOptionsProvider data={product}>
        <section className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <section>
                    <ProductGallery media={product.media.nodes} />
                </section>
                <section>
                    <div>
                        <ProductForm product={product}/>                        
                    </div>
                </section>
            </div>
        </section>
    </ProductOptionsProvider>
  )
}





