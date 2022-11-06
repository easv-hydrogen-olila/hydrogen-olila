import { Link, Image } from '@shopify/hydrogen';
import Button from '../elements/Button';
import { Heading } from '../elements/Heading';

// interface Metafield {
//     value: string;
//     reference?: object;
//   }

const Hero = (hero:any) => {
  console.log(hero)
  return (
        <div className='relative flex items-center h-[65vh] bg-clr_primary overflow-y-hidden'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center whitespace-nowrap md:translate-x-0 md:translate-y-0 md:static md:w-1/2'>
            <Heading component='h1' className='uppercase text-clr_primary_variaton text-3xl md:text-5xl font-bold'>{hero.heading?.value}</Heading>
            <Heading component='h1' className='uppercase text-clr_primary_variaton text-3xl md:text-5xl font-light'>{hero.byline?.value}</Heading>
          <Link to={`/collections/${hero.handle}`}>
            <Button type='button' buttonSize='btn--medium' buttonStyle='btn--hero--primary'>{hero.cta?.value}</Button>
          </Link>
          </div>
          <div className='md:w-1/2'>
            <Image data={hero.image} className='object-cover w-full'/>
          </div>
        </div>
  )
}

export default Hero