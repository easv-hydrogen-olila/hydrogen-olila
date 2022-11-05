import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import { CollectionConnection } from "@shopify/hydrogen/storefront-api-types";
import { Suspense } from "react";
import FeaturedCollections from "../sections/FeaturedCollections";
import Hero from "../sections/Hero";
import { Layout } from "../components/Layout.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <HomepageContent/>
        <FeaturedCollections/>
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {

  const data = useShopQuery <{ herobanners: CollectionConnection}> ({
    query: HOMEPAGE_CONTENT_QUERY,
    cache: CacheLong(),
    preload: true
  }) 

  const {data: {herobanners: {nodes}}} = data
  console.log(nodes)

  const [primaryHero] = nodes


  return (
    <>
      <Hero {...primaryHero}/>

    </>
  )
}


const HOMEPAGE_CONTENT_QUERY = gql`
query homepage {
  herobanners: collections(first: 3 query: "title:hero-section") {
    nodes {
      id
      title
      handle
      heading: metafield(namespace: "hero", key: "title") {
        value
      }
      byline: metafield(namespace: "hero", key: "byline") {
        value
      }
      cta: metafield(namespace: "hero", key: "cta") {
        value
      }
      image {
        altText
        width
        height
        url
      }
    }
  }
}
`