import {Image, Link} from '@shopify/hydrogen'
import { Heading } from '../elements/Heading'
import type {Image as ImageType} from '@shopify/hydrogen/storefront-api-types';
import Button from '../elements/Button';

interface Props{
    title: string,
    handle: string,
    image: ImageType
}

export default function CategoryCard ({title, handle, image }: Props)  {
    console.log('Loaded')
  return (
    <Link to={`/collections/${handle}`}>  
        <div 
            className='relative my-4 mx-3 md:my-0 w-[350px] h-[141px] 
            md:w-[130px] md:h-[190px] 2md:w-[152px] 2md:h-[190px] xl:w-[212px] xl:h-[265px] overflow-y-hidden'>

            <Image 
                key={handle} 
                data={image || undefined}
                alt={image.altText || `Image of ${title}`}
                className='object-cover w-full md:h-full'
            />
            <div className='absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2'>
                <Heading 
                    component='h3' 
                    className=' whitespace-nowrap uppercase font-bold
                    text-white text-xl md:text-lg xl:text-2xl'
                >
                    {title}
                </Heading>
                {/* <Button type='button' buttonSize='btn--medium' buttonStyle='btn--hero--secondary'>
                    Shop nu
                </Button> */}
            </div>
        </div>
    </Link>
    
  )
}
