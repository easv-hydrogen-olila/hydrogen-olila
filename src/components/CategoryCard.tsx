import {Image, Link} from '@shopify/hydrogen'
import { Heading } from '../elements/Heading'
import type {Image as ImageType} from '@shopify/hydrogen/storefront-api-types';

interface Props{
    title: string,
    handle: string,
    image: ImageType
}

export default function CategoryCard ({title, handle, image }: Props)  {
  return (
    <Link to={`/collections/${handle}`}>  
        <div className='relative my-4 md:mx-5 md:my-0'>
            <Heading 
                component='h3' 
                className='absolute whitespace-nowrap uppercase left-1/2 top-1/2 font-bold
                -translate-x-1/2 -translate-y-1/2 text-white text-xl'
            >
                {title}
            </Heading>
            <Image 
                key={handle} 
                data={image || undefined}
                alt={image.altText || `Image of ${title}`}
            />
        </div>
    </Link>
    
  )
}
