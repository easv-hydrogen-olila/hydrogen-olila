import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import { CollectionConnection, ProductConnection } from "@shopify/hydrogen/storefront-api-types";
import { Suspense } from "react";
import FeaturedCollections from "../sections/FeaturedCollections";
import Hero from "../sections/Hero";
import { Layout } from "../components";
import ShopCategories from "../sections/ShopCategories";
import ProductSwimlane from "../sections/ProductSwimlane.server";
import {PRODUCT_CARD_FRAGMENT} from "../lib"

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
    featuredproducts: ProductConnection,
    topproducts: ProductConnection,
  }>({
    query: HOMEPAGE_CONTENT_QUERY,
    cache: CacheLong(),
    preload: true
  }) 

  // const {data: {herobanners: {nodes}}} = data
  // const {data: {shopcategories}} = data
  const {data: {herobanners, shopcategories, featuredproducts, topproducts}} = data

  //Hero section fetched data, it's an array since more collections might be added
  const [primaryHero] = herobanners.nodes
  //Shop categories by age range
  const shopCategoriesData = shopcategories.nodes

  const featuredProductsData = featuredproducts.nodes
  const topProductsData = topproducts.nodes

  

  return (
    <>
      <Hero {...primaryHero}/>
      <ShopCategories data={shopCategoriesData}/>
      <ProductSwimlane 
        data={featuredProductsData} 
        styles='my-8 text-clr_navigation'
        title="Nyheder"
      />
      <ProductSwimlane 
        data={topProductsData} 
        styles='my-8 text-clr_navigation bg-[#E5E5E5]'
        title="HVEM SHOPPER DU TIL?"
      />
    </>
  )
}


const HOMEPAGE_CONTENT_QUERY = gql`
${PRODUCT_CARD_FRAGMENT}
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
  featuredproducts: products(first: 4 query: "tag:Wheat"){
    nodes{
      ... ProductCard
    }
  }
  topproducts: products(first: 4 sortKey: BEST_SELLING){
    nodes{
      ...ProductCard
    }
  }
}
`