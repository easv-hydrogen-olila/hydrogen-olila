import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'
import {FooterNewsletter, FooterMenu} from '../index'

export function Footer({menu}: {menu?: MenuItem[]}) {
  return (
    <>  
        <section className='bg-clr_primary_variaton flex flex-col justify-center md:flex-row text-white py-6'>
            <FooterMenu menu={menu}/>
        </section>
        <section className='bg-clr_primary flex flex-col items-center justify-center md:flex-row text-white py-6'>
            <FooterNewsletter/>
        </section>
    </>
  )
}

