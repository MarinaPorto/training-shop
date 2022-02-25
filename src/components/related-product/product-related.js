
import React from "react";
import './product-related.css';
// import arrow from "./img/arrow.svg";
import { cardsOnProductPage } from "./product-related-list";
import { CardItem } from "../product-card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';


export const ProductRelated = () => {
    return (
        <div className="product__related">
            <div className="container">
                <div className="product__related-inner" data-test-id='related-slider'>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },

                            460: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },

                            680: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            880: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }}
                        className="product__related-slider">
                        <div className="product__related-title-text ">RELATED PRODUCTS</div>
                        <div className="product__related-cards">
                            {cardsOnProductPage.map((el) => {
                                return (
                                    <SwiperSlide>
                                        <CardItem id={el.id}
                                            img={el.img}
                                            title={el.title}
                                            price={el.price}
                                            oldPrice={el.oldPrice}
                                            rate={el.rate}
                                            path={el.path}
                                            discount={el.discount}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </div>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}



