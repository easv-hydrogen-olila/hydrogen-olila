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

export default function ProductSlideshow({
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

  return (
    <Section heading={title} styles={styles} fullWidth>
      <div className="mx-auto flex items-center px-8">
          <Swiper
          // @ts-ignore
          slidesPerView={1}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            640: {
              // width: 576,
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            1024: {
              // width: 768,
              slidesPerView: 4,
              slidesPerGroup: 4
            },
          }}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper2"
          >
            {data.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard data={product}/>
            </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </Section>
  )
}
