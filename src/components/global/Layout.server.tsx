import { useShopQuery, CacheLong, gql, useUrl, Link, Seo } from "@shopify/hydrogen";
import { Suspense } from "react";
import {Footer} from "../index";
import { Header } from "./Header.client";

const FOOTER_MENU_HANDLE = 'main-footer'
const HEADER_MENU_HANDLE = 'main-menu'

//REVIEW - Data type children, shop, footerMenu

export function Layout ({children}) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";

    const {
        data: { shop, footerMenu, headerMenu },
    } = useShopQuery({
        query: SHOP_QUERY,
        variables:{
          footerMenuHandle: FOOTER_MENU_HANDLE,
          headerMenuHandle: HEADER_MENU_HANDLE
        },
        cache: CacheLong(),
        preload: true
    });
    const {items: footerMenuItems} = footerMenu
    const {items: headerMenuItems} = headerMenu
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
        <div className="min-h-screen">
            <Suspense>
              <Header title="Olila" menu={headerMenuItems}/>
            </Suspense>
            <main role="main" id="mainContent">
              {children}
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
    $headerMenuHandle: String!
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
      headerMenu: menu(handle: $headerMenuHandle){
        id
        items{
          ...MenuItem
          items{
            ...MenuItem
            items{
              ...MenuItem
            }
          }
        }
      }
  }
`;