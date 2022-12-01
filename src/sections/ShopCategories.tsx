import type {Collection} from '@shopify/hydrogen/storefront-api-types';
import { Heading } from '../components/elements/Heading';
import CategoryCard from '../components/cards/CategoryCard';
import Section from '../components/elements/Section';



export default function ShopCategories({
    data,
    styles,
    title = 'HVEM SHOPPER DU TIL?',
    ...props
}:{
    data: Collection[],
    title?: string,
    styles?: string
}) {

    const haveCollections = data.length > 0;

    if(!haveCollections) return null;

    return (
    //TODO - Section component. React conditional rendering for image. Refactor with categoryCard
    //TODO - Category card props definition (Image)
        <Section styles={styles} heading={title}>
            <div className='flex flex-col items-center justify-between md:flex-row'>
                <CategoryCards categories={data} />
            </div>
        </Section>
    )
}


function CategoryCards ({categories}: {categories: Collection[]}){
    return(
        <>
            {
            categories.map((category)=>{
                if (!category?.image) return null
                return (
                    <CategoryCard  {...category}/>
                )
            })}
        </>
    )
}