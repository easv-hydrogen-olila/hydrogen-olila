import {useState, useRef, useEffect, useCallback} from 'react';
import {Link, flattenConnection} from '@shopify/hydrogen';

import type {Collection, Product} from '@shopify/hydrogen/storefront-api-types'
import ProductGridCard from '../cards/ProductGridCard.client'
import Button from '../elements/Button'

export default function ProductGrid({collection, url}:{collection: Collection, url: string}) {

  const {title} = collection
  const initialProducts = collection?.products?.nodes || [];


  return (
      <div className="mx-auto max-w-2xl mb-36 py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="uppercase">{title}</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {initialProducts && (
              initialProducts.map((product) => (
                <ProductGridCard key={product.handle} product={product} />
              )))}
          </div>
        </div>

  )
}
