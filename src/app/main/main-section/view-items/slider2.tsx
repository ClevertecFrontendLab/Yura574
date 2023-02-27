/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import emptyCat from "../../../../assets/svg/emptyCat.svg";
import { SliderType } from "./slider";

export const Slider2 = (props: SliderType) => {
    const {images} = props
    const length = images && images.length;
    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <div className="main-slider">

                    {length === 0 ?
                        <div><img src={emptyCat} alt="book" className="main-book-photo" /></div>
                        : length === 1 ?
                            <div>{images &&<img src={'https://strapi.cleverland.by' + images[0].url} alt="book"
                                      className="main-book-photo" />}</div>
                            : <Swiper
                                data-test-id='slide-big'
                                loop={true}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={true}
                                modules={[Navigation, Thumbs, Pagination]}
                                pagination={{
                                    clickable: true,
                                    type: "bullets",
                                    dynamicBullets: true
                                }}
                                grabCursor={true}
                                className="product-images-slider"
                            >
                                {
                                   images&& images.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={'https://strapi.cleverland.by'+item.url} alt="product images" />
                                        </SwiperSlide>
                                    ))

                                }
                            </Swiper>}
                </div>

            </div>
        </div>
    );
};

