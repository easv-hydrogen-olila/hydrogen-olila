import type {MenuItem} from '@shopify/hydrogen/storefront-api-types'


export function FooterMenu({menu}:{menu?: MenuItem[]}) {
  return (
    <>
        {menu?.map((item: MenuItem) => (
            <div key={item.id} className='flex flex-col mx-4'>
                <h3 className='uppercase my-2'>{item.title}</h3>
                <div className='content'>
                    <ul>
                        {item.items?.map(subitem=> (
                            <li key={subitem.id}>{subitem.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </>
  )
}