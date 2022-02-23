
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
                    // nextButton={params.nextButtonCustomizedClass}
                    // prevButton={params.nextButtonCustomizedClass}
                    navigation={{
                        nextEl: '.slider-mini-arrow-prev',
                        prevEl: '.slider-mini-arrow-next',
                    }}

                    //    onSlideChange={(index) => console.log('slide change', index.activeIndex)} 
                    onSlideChange={(index) => setActiveSlide(index.activeIndex)}

                    spaceBetween={10}
                    slidesPerGroup={1}
                    slidesPerView={4}
                    // freeMode={true}
                    autoHeight={true}
                    // slidesPerGroup={1}

                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    direction={"vertical"}
                    // pagination={{
                    //     clickable: true,
                    // }}

                    className="product-vertical-swiper"
                // className='mySwiper2'


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
                            console.log(el, index)

                            return (<SwiperSlide >

                                {/* {({ isActive }) => (
                                    <img src={el} alt="img-preview" className={classNames("slider-img-preview",  ( !isActive ? "activepreview" : ""))} />
                                )

                                } */}


                                <div className={classNames({ activepreview: activeSlide !== index })} onClick={() => setActiveSlide(index)}>
                                    <img src={el} alt="img-preview" className="slider-img-preview" />
                                </div>

                            </SwiperSlide>

                            )

                        })}

                    </div>
                    {/* <div className="swiper-btn-vertical">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    </div> */}
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
                    className='mySwiper2'
                // onSlideChange={(index) => console.log('slide change', index.activeIndex)} 

                >
                    <SwiperSlide>
                        <div className="product__slider">

                            <img src={productDescription.img} alt="img-slider" className="slider-img" />

                            {/* <div className="product-slider-arrows">
                            <img src={arrow} alt="arrow-left" className="arrow-left arrows" />
                            <img src={arrow} alt="arrow-right" className="arrow-right arrows" />
                        </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">

                            <img src={productDescription.img} alt="img-slider" className="slider-img" />

                            {/* <div className="product-slider-arrows">
                            <img src={arrow} alt="arrow-left" className="arrow-left arrows" />
                            <img src={arrow} alt="arrow-right" className="arrow-right arrows" />
                        </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">

                            <img src={productDescription.img} alt="img-slider" className="slider-img" />

                            {/* <div className="product-slider-arrows">
                            <img src={arrow} alt="arrow-left" className="arrow-left arrows" />
                            <img src={arrow} alt="arrow-right" className="arrow-right arrows" />
                        </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider">

                            <img src={productDescription.img} alt="img-slider" className="slider-img" />

                            {/* <div className="product-slider-arrows">
                            <img src={arrow} alt="arrow-left" className="arrow-left arrows" />
                            <img src={arrow} alt="arrow-right" className="arrow-right arrows" />
                        </div> */}
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>


            <div className="product__description-all">
            </div>
        </div>
    )
}



