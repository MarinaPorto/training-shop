import React from "react";
import './main-slider.css';
import photo1 from '../main-slider/img/photo1.jpg';
// import leftArrow from '../main-slider/img/left-arrow.svg';
import photo2 from '../main-slider/img/photo2.jpg';
import photo3 from '../main-slider/img/photo3.jpg';
import photo4 from '../main-slider/img/photo4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";
import 'swiper/css';



export const MainSliderBlock = () => {
  



    return (
        <div className="main__slider-block main__slider-block-top">
            <div className="container">
                <div className="main-photo-block-inner">
                    <div className="main-slider main-swiper" data-test-id='main-slider'>
                        <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="main-swiper-slider"
                        
                        >

                            <SwiperSlide>
                                <div className="swiper-slide-wrapper">
                          <img src={photo1} alt="icon" className="main-slider-img" />
                            <div className="main-slider-content">
                                  
                                {/* <div className="left-arrow arrows">
                                    <img src={leftArrow} alt="icon" className="main-slider-arrow" />
                                </div> */}
                                <div className="slider-banner">
                                    <span className="banner-text-top">Banner</span>
                                    <span className="banner-text-title">your title text </span>
                                </div>
                                {/* <div className="right-arrow arrows">
                                    <img src={leftArrow} alt="icon" className="main-slider-arrow right" />
                                </div> */}
                            </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide-wrapper">
                                 <img src={photo1} alt="icon" className="main-slider-img" />
                            <div className="main-slider-content">
                           
                                {/* <div className="left-arrow arrows">
                                    <img src={leftArrow} alt="icon" className="main-slider-arrow" />
                                </div> */}
                                <div className="slider-banner">
                                    <span className="banner-text-top">Banner</span>
                                    <span className="banner-text-title">your title text </span>
                                </div>
                                {/* <div className="right-arrow arrows">
                                    <img src={leftArrow} alt="icon" className="main-slider-arrow right" />
                                </div> */}
                            </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide-wrapper">
                                 <img src={photo1} alt="icon" className="main-slider-img" />
                            <div className="main-slider-content">
                               
                                {/* <div className="left-arrow arrows">
                                    <img src={leftArrow} alt="icon" className="main-slider-arrow" />
                                </div> */}
                                <div className="slider-banner">
                                    <span className="banner-text-top">Banner</span>
                                    <span className="banner-text-title">your title text </span>
                                </div>
                                {/* <div className="right-arrow arrows">
                                    <img src={leftArrow} alt="icon" className="main-slider-arrow right" />
                                </div> */}
                            </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="main-slider main-photo-block right-block">
                        <div className="main-photo main-photo-first">
                            <img src={photo2} alt="icon" className="main-block-img" />
                            <span className="banner-text-title banner-text-title-mini">Women </span>
                        </div>
                        <div className="main-photo main-photo-second">
                            <img src={photo3} alt="icon" className="main-block-img" />

                            <span className="banner-text-title banner-text-title-mini">Men </span>
                        </div>
                        <div className="main-photo">
                            <img src={photo4} alt="icon" className="main-block-img" />
                            <span className="banner-text-title banner-text-title-big">Accessories </span>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}