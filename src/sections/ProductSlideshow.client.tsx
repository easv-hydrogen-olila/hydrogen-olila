// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Section from '../components/elements/Section'
import type {Product, Collection} from '@shopify/hydrogen/storefront-api-types'
import ProductCard from '../components/cards/ProductCard.client'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const defaultProducts = new Array(12).fill('')

export default function ProductSwimlane({
  //if data prop is empty we set is as an empty array
    data = defaultProducts,
    title = 'HVEM SHOPPER DU TIL?',
    count = 12,
    styles,
    fullWidth 
}:{
  data: Product[],
  title?: string,
  count?: number,
  //REVIEW - Classname?
  styles?: string,
  fullWidth?: boolean
}) {

  //REVIEW - useMemo hook https://reactjs.org/docs/hooks-reference.html#usememo
  // const productCardsMarkup = () => {
    // if(typeof data === 'object'){
    //   return <ProductCards products={data}/>
    // }

    // //If the data provided is only a productId, we will query the productRecommendations API
    // if(typeof data === 'string'){
    //   return 'Recommended products'
    // }

    // return <ProductCards products={data}/>
  // }

  return (
    <Section heading={title} styles={styles} fullWidth>
      <div className="mx-auto flex items-center px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
          <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper2"
          >
            {/* <ProductCards products={data}/> */}

            {data.map((product) => (
            <SwiperSlide>
              <ProductCard data={product}/>
            </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </Section>
  )
}
