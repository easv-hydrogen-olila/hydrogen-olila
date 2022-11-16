import React from 'react'
import Section from '../elements/Section'
import type {Product, Collection} from '@shopify/hydrogen/storefront-api-types'
import ProductCard from '../components/cards/ProductCard.client'


const defaultProducts = new Array(12).fill('')

export default function ProductSwimlane({
  //if data prop is empty we set is as an empty array
    data = defaultProducts,
    title = 'HVEM SHOPPER DU TIL?',
    count = 12,
    styles 
}:{
  data: Product[],
  title?: string,
  count?: number,
  //REVIEW - Classname?
  styles?: string
}) {

  //REVIEW - useMemo hook https://reactjs.org/docs/hooks-reference.html#usememo
  // const productCardsMarkup = () => {
    // if(typeof data === 'object'){
    //   return <ProductCards products={data}/>
    // }

    // //If the data provided is only a productId, we will query the productRecommendations API
    // if(typeof data === 'string'){
    //   return 'Recommended products'
    // }

    // return <ProductCards products={data}/>
  // }

  return (
    <Section heading={title} styles={styles}>
      <div className='flex items-center justify-center'>
        <ProductCards products={data}/>
      </div>
    </Section>
  )
}

function ProductCards({products}: {products:Product[]}) {
  return (
    <>
      {
        products.map((product) => (
          <ProductCard data={product}/>
        ))
      }
    </>
  )
}
