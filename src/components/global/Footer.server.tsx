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
        <section className='bg-clr_primary '>
            <div className='mx-auto container'>
              <FooterNewsletter/>
            </div>
        </section>
    </>
  )
}

