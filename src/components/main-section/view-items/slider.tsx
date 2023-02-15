/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SwiperClass from 'swiper/types/swiper-class'
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import emptyCat from "../../../assets/svg/emptyCat.svg";


export type SliderType = {
    images: { url: string }[] | null
}

export const Slider = (props: SliderType) => {
    const {images} = props

    const [activeThumb, setActiveThumb] = useState<SwiperClass | null>(null);
    let slides = 2;
    let width = "160px";

    const length = images && images.length;
    if(length) {
        if (length === 3) {
            width = "251px";
            slides = 3;
        } else if (length === 4) {
            width = "345px";
            slides = 4;
        } else if (length > 4) {
            width = "100%";
            slides = 5;
        }
    }
    console.log(images &&'https://strapi.cleverland.by' + images[0].url)
    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <div className="main-slider">
                    {length === 0 ?
                        <div><img src={emptyCat} alt="book" className="main-book-photo" /></div>
                        : length === 1 ?
                            <div>{images&& <img src={'https://strapi.cleverland.by' + images[0].url} alt="book"
                                      className="main-book-photo" />}</div>
                            : <Swiper
                                data-test-id='slide-big'
                                modules={[FreeMode,Navigation, Thumbs]}
                                loop={true}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={true}
                                grabCursor={true}
                                thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
                                className="product-images-slider"
                            >
                                {
                                  images&& images.map((url, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={'https://strapi.cleverland.by' +url.url} alt="product images" />
                                        </SwiperSlide>
                                    ))

                                }
                            </Swiper>}
                </div>
                {length && length > 1 && <div className="thumb-slider">
                    <Swiper
                        onSwiper={setActiveThumb}
                        // loop={true}
                        spaceBetween={30}
                        slidesPerView={slides}
                        modules={[FreeMode,Navigation, Thumbs]}
                        style={{ width: width }}
                        className="product-images-slider-thumbs"
                    >
                        {
                            images.map((item, index) => (
                                <SwiperSlide key={index} data-test-id='slide-mini'>
                                    <div className="product-images-slider-thumbs-wrapper">
                                        <img src={'https://strapi.cleverland.by' + item.url} alt="product images" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>}
            </div>
        </div>
    );
};
