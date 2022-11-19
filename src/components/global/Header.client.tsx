import {Image} from '@shopify/hydrogen'
import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'
import { IconAccount, IconCart, IconFavorite, IconSearch } from '../../elements'


const SHOP_BANNER_LOGO = 'https://cdn.shopify.com/s/files/1/0677/4017/2569/files/logo-sort_1.png?v=1668592585'

export function Header({title, menu}:{
    title?: string,
    menu?:  MenuItem[],
}) {


    console.log(menu)

  return (
    <>
        <DesktopHeader 
            title ='Olila'
            menu = {menu}
            logo = {SHOP_BANNER_LOGO}
        />
    </>
  )
}


function DesktopHeader ({title, menu, isHome, logo}: {
    title: string,
    isHome?: boolean,
    menu?: MenuItem[],
    logo: string,

}){
    return (
        <header role='banner'>
            <div className='relative px-12 py-6'>
                <div className='mega--menu left-0 flex '>
                { menu && (
                    menu.map(item => (
                        <h1 key={item.id}>{item.title}</h1>
                    ))
                )}
                </div>
                <Image 
                    src={logo}
                    alt= 'Olila logo'
                    width={90}
                    height={40}
                    className= 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[83px] h-[48px]'
                />
                <IconAccount width={25} height={25}/>
                <IconFavorite width={25} height={25}/>
                <IconCart width={30} height={30}/>
                <IconSearch width={25} height={25}/>
            </div>
        </header>
    )
}
