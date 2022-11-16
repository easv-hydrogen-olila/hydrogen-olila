import type {Collection} from '@shopify/hydrogen/storefront-api-types';
import { Heading } from '../elements/Heading';
import CategoryCard from '../components/cards/CategoryCard';



export default function ShopCategories({
    data,
    title = 'HVEM SHOPPER DU TIL?',
    ...props
}:{
    data: Collection[],
    title?: string
}) {

    const haveCollections = data.length > 0;

    if(!haveCollections) return null;

    return (
    //TODO - Section component. React conditional rendering for image. Refactor with categoryCard
    //TODO - Category card props definition (Image)
        <section>
            <Heading>{title}</Heading>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                {data.map((collection)=>{
                    if (!collection?.image) return null
                    return (
                        <CategoryCard  {...collection}/>
                    )
                })}
            </div>
        </section>
    )
}
