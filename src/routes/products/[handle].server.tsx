import {
    gql,
    useShopQuery,
    useServerAnalytics,
    useRouteParams,
    ShopifyAnalyticsConstants,
    Seo,
  } from "@shopify/hydrogen";
  import { Suspense } from "react";
  
  import { Layout } from "../../components/global/Layout.server";
  import {ProductDetails, ProductDetail} from "../../components";
  import type { Product, ProductConnection } from '@shopify/hydrogen/storefront-api-types'
  import {PRODUCT_CARD_FRAGMENT} from "../../lib"
  import ProductSlideshow from "../../sections/ProductSlideshow.client";


  
  export default function ProductRoute({ params }) {
    const { handle } = useRouteParams();
  
    const data = useShopQuery <{product: Product, topproducts: ProductConnection }> ({
      query: PRODUCT_QUERY,
      variables: {
        handle,
      },
    });

  const {data: {product, topproducts}} = data
  const topProductsData = topproducts.nodes

  
    useServerAnalytics({
      shopify: {
        pageType: ShopifyAnalyticsConstants.pageType.product,
        resourceId: product.id,
      },
    });
  
    return (
      <Layout>
        <ProductDetail product={product}/>
        <ProductSlideshow 
          fullWidth
          data={topProductsData} 
          styles='my-4 py-4 px-8 text-clr_navigation bg-[#F9F9F9]'
          title="POPULÆRT I ØJEBLIKKET"
        />
      </Layout>
    );
  }
  
  const PRODUCT_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
    fragment MediaFields on Media {
      mediaContentType
      alt
      previewImage {
        url
      }
      ... on MediaImage {
        id
        image {
          url
          width
          height
        }
      }
      ... on Video {
        id
        sources {
          mimeType
          url
        }
      }
      ... on Model3d {
        id
        sources {
          mimeType
          url
        }
      }
      ... on ExternalVideo {
        id
        embedUrl
        host
      }
    }
    query Product($handle: String!) {
      product(handle: $handle) {
        id
        title
        vendor
        descriptionHtml
        media(first: 7) {
          nodes {
            ...MediaFields
          }
        }
        variants(first: 100) {
          nodes {
            id
            availableForSale
            compareAtPriceV2 {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
            priceV2 {
              amount
              currencyCode
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
          }
        }
        seo {
          description
          title
        }
      }
      featuredproducts: products(first: 15 query: "tag:Wheat"){
        nodes{
          ... ProductCard
        }
      }
      topproducts: products(first: 15 sortKey: BEST_SELLING){
        nodes{
          ...ProductCard
        }
      }
    }
  `;
  