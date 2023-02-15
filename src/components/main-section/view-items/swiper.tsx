/* eslint-disable */
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { SlideType } from "../../book-page";

type SliderType = {
    slides: SlideType[]
}

export const _Slider = (props: SliderType) => {
    return (
        <div className="test-container">
            <Swiper className="swiper-container swiper-container-main"
                    loop={true}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={true}
                    modules={[]}
            >
                {
                    props.slides.map(el => (
                        <SwiperSlide className='swiper-slide'>
                            <div><img src={el.title} alt="" /></div>
                        </SwiperSlide>))
                }
            </Swiper>
            <Swiper className="swiper-container lololo"
                    loop={true}
                    navigation={true}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={true}
                    modules={[Navigation]}
            >
                {
                    props.slides.map(el => (
                        <SwiperSlide className='swiper-slide'>
                            <img src={el.title} alt="" />
                        </SwiperSlide>))
                }
            </Swiper>
        </div>
    );

};
