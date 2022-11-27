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
  return (
        <div 
            className='relative first:mx-0 first:mr-2 mx-2 my-4 md:my-0 w-[350px] h-[141px] 
            md:w-[130px] md:h-[190px] 2md:w-[166px] 2md:h-[233px] xl:w-[250px] xl:h-[350px] overflow-hidden overflow-y-hidden'>

            <Image 
                key={handle} 
                data={image || undefined}
                alt={image.altText || `Image of ${title}`}
                className='object-cover w-full md:h-full'
            />
            <div className='absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 
                            flex flex-col items-center justify-center' 
            >
                <Heading 
                    component='h3'
                    className=' whitespace-nowrap uppercase font-bold
                    text-white text-xl md:text-lg xl:text-2xl'
                >
                    {title}
                </Heading>
                <div className='hidden md:block'>
                    <Link to={`/collections/${handle}`}>  
                        <Button type='button' buttonSize='btn--medium' buttonStyle='btn--secondary'>
                            Shop nu
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
  )
}
