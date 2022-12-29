import { HydrogenRouteProps } from '@shopify/hydrogen/types'
import {useUrl, useShopQuery, useServerAnalytics, gql} from '@shopify/hydrogen'
import { PRODUCT_CARD_FRAGMENT } from "../lib/fragments";

import SearchPage from '../components/search/SearchPage.server';
import ProductGrid from '../components/product/ProductGrid.client';
import { Collection } from '@shopify/hydrogen/storefront-api-types';

const PAGINATION_SIZE = 48

export default function Search({
    pageBy = PAGINATION_SIZE,
    params
}:{
    pageBy?: number,
    params: HydrogenRouteProps['params']
}) {

    const {handle} = params
    const {searchParams} = useUrl()
    const searchTerm = searchParams.get('q');

    const {data} =useShopQuery<any>({
        query: SEARCH_QUERY,
        variables: {
            handle,
            pageBy,
            searchTerm
        },
        preload: true,
    });

    const products = searchTerm === null ? '' : data?.products
    const noResults = products?.nodes?.length === 0;


  return (
    <SearchPage searchTerm={searchTerm}>
      {!noResults &&(
            <ProductGrid
                collection={{products} as Collection}
                url={`/search?q=${searchTerm}`}
            />
      )}
      {noResults &&(
        <div className='flex items-center pt-20 justify-center text-clr_navigation uppercase text-2xl font-bold '>
          INGEN RESULTATER FUNDET
        </div>
      )}
    </SearchPage>
  )
}



const SEARCH_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query search(
    $searchTerm: String
    $pageBy: Int!
  ){
    products(
      first: $pageBy
      sortKey: RELEVANCE
      query: $searchTerm
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;