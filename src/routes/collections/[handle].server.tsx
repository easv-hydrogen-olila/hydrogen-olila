import {
    gql,
    useShopQuery,
    useRouteParams,
    useServerAnalytics,
    ShopifyAnalyticsConstants,
    Seo,
    type HydrogenRequest,
    type HydrogenApiRouteOptions,
  } from "@shopify/hydrogen";
  
  import { Layout } from "../../components";
  import {ProductCard} from "../../components";
  import { Suspense } from "react";
  import Section from "../../components/elements/Section";
  import ProductGrid from "../../components/product/ProductGrid.client";
  import { PRODUCT_CARD_FRAGMENT } from "../../lib/fragments";

const pageBy = 10
  
  export default function Collection() {
    const { handle } = useRouteParams();
  
    const {
      data: { collection },
    } = useShopQuery({
      query: QUERY,
      variables: {
        handle,
        pageBy
      },
    });
  
    useServerAnalytics({
      shopify: {
        pageType: ShopifyAnalyticsConstants.pageType.collection,
        resourceId: collection.id,
      },
    });
  
    return (
      <Layout>
        <Suspense>
          <Seo type="collection" data={collection} />
        </Suspense>
        <Section>
          <ProductGrid
           collection={collection}
           url={`/collection/${handle}`}
          />
        </Section>
      </Layout>
    );
  }

  // API endpoint that returns paginated products for this collection
// @see templates/demo-store/src/components/product/ProductGrid.client.tsx
export async function api(
  request: HydrogenRequest,
  {params, queryShop}: HydrogenApiRouteOptions,
) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', {
      status: 405,
      headers: {Allow: 'POST'},
    });
  }
  const url = new URL(request.url);

  const cursor = url.searchParams.get('cursor');
  const {handle} = params;

  return await queryShop({
    query: PAGINATE_COLLECTION_QUERY,
    variables: {
      handle,
      cursor,
      pageBy,
    },
  });
}
  
  const QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
    query CollectionDetails(
      $handle: String!
      $pageBy: Int!
      ) {
      collection(handle: $handle) {
        products(first: $pageBy) {
          nodes {
            ...ProductCard
          }
          pageInfo{
            hasNextPage
            endCursor
          }
        }
      }
    }
  `;
  
  const PAGINATE_COLLECTION_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionPage(
    $handle: String!
    $pageBy: Int!
    $cursor: String
  ) {
    collection(handle: $handle) {
      products(first: $pageBy, after: $cursor) {
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;