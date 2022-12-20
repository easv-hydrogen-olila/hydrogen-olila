import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'
import {FooterNewsletter, FooterMenu} from '../index'

export function Footer({menu}: {menu?: MenuItem[]}) {
  return (
    <>  
        <section className='bg-clr_dropdown'>
            <div className='mx-auto container'>
              <FooterMenu menu={menu}/>
            </div>
        </section>
        <section className='bg-clr_primary px-8 flex flex-col items-center justify-center md:flex-row md:justify-between text-white py-12'>
            <FooterNewsletter/>
        </section>
    </>
  )
}

