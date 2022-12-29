import { Link, Image, gql, CacheLong, useShopQuery } from '@shopify/hydrogen'
import { Menu } from '@shopify/hydrogen/storefront-api-types';
import { Heading } from '../components/elements/Heading';
import { getUrlHandle } from '../lib/utils';
import Collection from '../routes/collections/[handle].server';

const POPULAR_BRANDS_MENU_HANDLE = 'popular-brands'
const POPULAR_CATEGORIES_MENU_HANDLE = 'popular-kategories'

function FeaturedCollections() {
    
    const {
        data: {brands, categories},
    } = useShopQuery ({
        query: QUERY,
        variables:{
          popularBrandsMenuHandle: POPULAR_BRANDS_MENU_HANDLE,
          popularCategoriesMenuHandle: POPULAR_CATEGORIES_MENU_HANDLE
        },
        cache: CacheLong(),
    });

    const {items: popularBrands} = brands
    const {items: popularCategories} = categories

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-8 gap-5 text-clr_navigation my-8'>
        <div className='flex flex-col'>
          <Heading component='h3' className='font-bold uppercase text-2xl my-2'>
            Populære mærker
          </Heading>
            <ColllectionDetails menus={popularBrands}/>
        </div>
        <div>
          <Heading component='h3' className='font-bold uppercase text-2xl my-2'>
            Populære KATEGORIER
          </Heading>
            <ColllectionDetails menus={popularCategories}/>
        </div>
      </div>
    </section>
    );
}


function ColllectionDetails({menus}: {menus: Menu}){

  return (
    <div className='flex flex-col space-y-2'>
      {menus && (menus.map((menu)=>{
        let handle = getUrlHandle(menu.url)
        return(
          <li className='list-none'>
            <Link to={`/collections/${handle}`}>
              {menu.title}
            </Link>
          </li>
        )
      }))}
    </div>
  )
}

const QUERY = gql`
fragment MenuItem on MenuItem {
  id
  resourceId
  tags
  title
  type
  url
}
query ShopInfo(
  $popularBrandsMenuHandle: String!
  $popularCategoriesMenuHandle: String!
) {
    brands: menu(handle: $popularBrandsMenuHandle) {
        id
        items{
          ...MenuItem
        }
      }
    categories: menu(handle: $popularCategoriesMenuHandle) {
        id
        items{
          ...MenuItem
        }
    }
  }
`;

export default FeaturedCollections