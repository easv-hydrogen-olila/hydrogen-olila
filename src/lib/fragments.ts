import { gql } from '@shopify/hydrogen';


export const PRODUCT_CARD_FRAGMENT = gql`
fragment ProductCard on Product{
    id
    title
    handle
    description
    featuredImage{
        id
        altText
        height
        width
        url
    }
    variants(first: 5){
      nodes{
        id
        image{
          url
          width
          height
          altText
        }
        priceV2{
          amount
          currencyCode
        }
        compareAtPriceV2{
          amount
          currencyCode
        }
      }
    }
  }
`
export const MENU_ITEM_FRAGMENT = gql`
fragment MenuItem on MenuItem {
  id
  resourceId
  tags
  title
  type
  url
}
`