import {MediaFile, Image} from '@shopify/hydrogen'
import type {Image as ImageType, Media} from '@shopify/hydrogen/storefront-api-types'

import React, { useRef, useState } from "react";
// Import Swiper React components
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
// @ts-ignore
import { Pagination } from "swiper";

export function ProductGallery({media}: {media: ImageType[]}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper3"
            >
                {media.map((media) => {
                    return(
                        <SwiperSlide key={`${media.id}-display`}>
                            <Image data={media} alt={`${media.altText} || 'Image of ${media.id}`}  />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {media.map((media) => {
                    return(
                        <SwiperSlide key={`${media.id}-slideshow`}>
                            <Image data={media}  alt={`${media.altText} || 'Image of ${media.id}`} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
