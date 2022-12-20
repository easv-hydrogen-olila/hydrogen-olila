import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'
import { FOOTER_CONTENT } from '../../lib/content'
import Accordion from './Accordion'



export function FooterMenu({menu}:{menu?: MenuItem[]}) {
  return (
    <>
        <div className='accordion md:flex md:justify-between'>
            {FOOTER_CONTENT.map(menu =>(
            <Accordion {...menu}/>
            ))}
        </div>
    </>
  )
}

function MenuLoader ({menu}:{menu?: MenuItem[]}) {
    return (
    <>
        {menu?.map((item: MenuItem) => (
            <div key={item.id} className='flex flex-col mx-4'>
                <h3 className='uppercase my-2'>{item.title}</h3>
                <div className='content'>
                    <ul>
                        {item.items.length > 0 && item.items?.map(subitem=> (
                            <li key={subitem.id}>{subitem.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </>
    )
}