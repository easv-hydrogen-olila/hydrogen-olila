import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import { CollectionConnection } from "@shopify/hydrogen/storefront-api-types";
import { Suspense } from "react";
import FeaturedCollections from "../sections/FeaturedCollections";
import Hero from "../sections/Hero";
import { Layout } from "../components/Layout.server";
import ShopCategories from "../sections/ShopCategories";

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

  const data = useShopQuery<{ 
    herobanners: CollectionConnection, 
    shopcategories: CollectionConnection
  }>({
    query: HOMEPAGE_CONTENT_QUERY,
    cache: CacheLong(),
    preload: true
  }) 

  // const {data: {herobanners: {nodes}}} = data
  // const {data: {shopcategories}} = data
  const {data: {herobanners, shopcategories}} = data
  // console.log(shopcategories)

  //Hero section fetched data, it's an array since more collections might be added
  const [primaryHero] = herobanners.nodes
  //Shop categories by age range
  const shopCategoriesData = shopcategories.nodes

  return (
    <>
      <Hero {...primaryHero}/>
      <ShopCategories data={shopCategoriesData}/>

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
  shopcategories:collections(first: 10 query: "(title:NYFØDT) OR (title:Baby pige) OR (title:Baby dreng) OR (title:Kids pige) OR (title:Kids dreng)"){
    nodes{
      id
      title
      handle
      image{
        altText
        width
        height
        url
      }
    }
  }
}
`