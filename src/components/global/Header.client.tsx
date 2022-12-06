import {Link, Image} from '@shopify/hydrogen'
import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'
import { IconAccount, IconCart, IconFavorite, IconSearch } from '../elements/index'
import NewHeader from './NewHeader.client'


const SHOP_BANNER_LOGO = 'https://cdn.shopify.com/s/files/1/0677/4017/2569/files/logo-sort_1.png?v=1668592585'

export function Header({title, menu}:{
    title?: string,
    menu?:  MenuItem[],
}) {
  return (
    <>
        {/* <DesktopHeader 
            title ='Olila'
            menu = {menu}
            logo = {SHOP_BANNER_LOGO}
        /> */}
        <NewHeader menu={menu}/>
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
        <header role='banner container'>
            <div className='relative px-12 py-8 md:py-6 flex items-center'>
                <div className='hidden md:block mega--menu left-0' role='navigation'>
                    <div className='tier-1' role='navigation'>
                        <ul className='inline-block'>
                            { menu && (
                                menu.map(item => (
                                    <a key={item.id} href="#">
                                        <li className='inline-block' key={item.id}>{item.title}</li>
                                    </a>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
                <Image 
                    src={logo}
                    alt= 'Olila logo'
                    width={90}
                    height={40}
                    className= 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[83px] h-[48px]'
                />
                <div className='absolute right-0 header-icons flex px-6 md:px-12 space-x-2'>
                    <Link to='/account'>
                        <IconAccount width={25} height={25}/>
                    </Link>
                    <IconFavorite width={25} height={25}/>
                    <IconCart width={25} height={25}/>
                    <IconSearch width={23} height={23}/>
                </div>
            </div>
        </header>
    )
}
