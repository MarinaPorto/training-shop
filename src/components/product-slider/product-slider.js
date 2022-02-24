
import React from "react";
import './product-slider.css';
import { productImgSlider } from "../../pages/product-page/product-description";
import { productDescription } from "../../pages/product-page/product-description";
import arrow from "./img/arrow.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper";
import { useState } from "react";
import classNames from "classnames";

export const ProductSlider = () => {
    let [thumbsSwiper, setThumbsSwiper] = useState(null);
    let [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="product__slider-inner" data-test-id='product-slider'>
            <div className="product__slider-mini">

                <Swiper
                    onSwiper={setThumbsSwiper}
                    // navigation={true}
                    observer={true}
                    observeParents={true}
                    navigation={{
                        nextEl: '.slider-mini-arrow-prev',
                        prevEl: '.slider-mini-arrow-next',
                    }}
                    onSlideChange={(index) => setActiveSlide(index.activeIndex)}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    slidesPerView={4}
                    autoHeight={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    direction={"vertical"}
                    className="product-vertical-swiper"
                    breakpoints={{
                        320: {
                            direction: 'horizontal'
                        },

                        460: {
                            direction: 'horizontal'
                        },
                        540: {
                            direction: 'vertical'
                        },

                        680: {
                            direction: 'vertical'
                        }
                    }}
                >  <div className="slider-arrows ">
                        <div className="slider-mini-arrow-prev">
                            <img src={arrow} alt="arrow-up" className="arrow-up arrows" />
                        </div>
                        <div className="slider-mini-arrow-next">
                            <img src={arrow} alt="arrow-down" className="arrow-down arrows" />
                        </div>
                    </div>
                    <div className="product-slider-mini">
                        {productImgSlider.map((el, index) => {
                            return (<SwiperSlide >
                                <div className={classNames({ activepreview: activeSlide !== index })} onClick={() => setActiveSlide(index)}>
                                    <img src={el} alt="img-preview" className="slider-img-preview" />
                                </div>
                            </SwiperSlide>
                            )
                        })}

                    </div>
                </Swiper>
            </div>
            <div className="product__slider-big">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    slidesPerGroup={1}
                    slidesPerView={1}
                    thumbs={{ swiper: thumbsSwiper }}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSlideChange={(index) => setActiveSlide(index.activeIndex)}
                >
                    <SwiperSlide>
                        <div className="product__slider">
                            <img src={productDescription.img} alt="img-slider" className="slider-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">
                            <img src={productDescription.img} alt="img-slider" className="slider-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">
                            <img src={productDescription.img} alt="img-slider" className="slider-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">
                            <img src={productDescription.img} alt="img-slider" className="slider-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">
                            <img src={productDescription.img} alt="img-slider" className="slider-img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="product__description-all">
            </div>
        </div>
    )
}



