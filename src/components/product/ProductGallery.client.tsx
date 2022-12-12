import {MediaFile} from '@shopify/hydrogen'
import type {Media} from '@shopify/hydrogen/storefront-api-types'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export function ProductGallery({media}: {media: Media[]}) {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {media.map((media) => {
                    return(
                        <SwiperSlide>
                            <MediaFile data={media} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
