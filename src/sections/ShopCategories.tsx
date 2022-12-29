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
        <Section styles={styles}>
            <div className='container px-8 mx-auto'>
                <Heading component='h3'>{title}</Heading>
                <div className='flex flex-col items-center justify-between md:flex-row'>
                    <CategoryCards categories={data} />
                </div>
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