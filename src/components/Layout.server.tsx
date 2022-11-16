import { useShopQuery, CacheLong, gql, useUrl, Link, Seo } from "@shopify/hydrogen";
import { Suspense } from "react";
import {Footer} from "../components";

const FOOTER_MENU_HANDLE = 'main-footer'

export function Layout ({children}) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";

    const {
        data: { shop, footerMenu },
    } = useShopQuery({
        query: SHOP_QUERY,
        variables:{
          footerMenuHandle: FOOTER_MENU_HANDLE
        },
        cache: CacheLong(),
        preload: true
    });

    const {items: footerMenuItems} = footerMenu
    return (
        <>
        <Suspense>
            <Seo
                type="defaultSeo"
                data= {{
                    title: shop.name,
                    description: shop.description
            }}/>
        </Suspense>
        <div className="container mx-auto">
            <div className="">
              <a href="#mainContent" className="sr-only">
                Skip to content
              </a>
            </div>
            <header
              role="banner"
              className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${
                isHome ? "bg-black/80 text-white" : "bg-white/80"
              }`}
            >
              <div className="flex gap-12">
                <Link className="font-bold" to="/">
                  {shop.name}
                </Link>
              </div>
            </header>
    
            <main role="main" id="mainContent" className="">
              <Suspense>{children}</Suspense>
            </main>
          </div>
          <Suspense>
            <Footer menu={footerMenuItems}/>
          </Suspense>
        </>
    )
};

function FooterMenu() {
  
}


const SHOP_QUERY = gql`
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  query ShopInfo(
    $footerMenuHandle: String!
  ) {
      shop {
        name
        description
      }
      footerMenu: menu(handle: $footerMenuHandle){
        id
        items{
          ...MenuItem
          items{
            ...MenuItem
          }
        }
      }
  }
`;