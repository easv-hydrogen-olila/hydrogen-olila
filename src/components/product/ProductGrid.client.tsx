import React from 'react'
import type {Collection, Product} from '@shopify/hydrogen/storefront-api-types'
import ProductGridCard from '../cards/ProductGridCard.client'

export default function ProductGrid({data}:{data: Collection}) {
  const products = data?.products.nodes || []
  return (
    <div className="bg-clr_grey_bg">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products && (
            products.map((product) => (
              <ProductGridCard key={product.id} product={product} />
            )))}
        </div>
      </div>
    </div>

  )
}
