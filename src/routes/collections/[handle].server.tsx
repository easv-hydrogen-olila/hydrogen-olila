import {
    gql,
    useShopQuery,
    useRouteParams,
    useServerAnalytics,
    ShopifyAnalyticsConstants,
    Seo,
  } from "@shopify/hydrogen";
  
  import { Layout } from "../../components";
  import {ProductCard} from "../../components";
  import { Suspense } from "react";
import Section from "../../components/elements/Section";
import ProductGrid from "../../components/product/ProductGrid.client";
import { PRODUCT_CARD_FRAGMENT } from "../../lib/fragments";

const byPage = 20
  
  export default function Collection() {
    const { handle } = useRouteParams();
  
    const {
      data: { collection },
    } = useShopQuery({
      query: QUERY,
      variables: {
        handle,
        byPage
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
          <ProductGrid data={collection}/>
        </Section>
      </Layout>
    );
  }
  
  const QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
    query CollectionDetails(
      $handle: String!
      $byPage: Int!
      ) {
      collection(handle: $handle) {
        products(first: $byPage) {
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
  