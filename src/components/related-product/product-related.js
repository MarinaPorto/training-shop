
import React from "react";
import './product-related.css';
import { CardItem } from "../product-card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';


export const ProductRelated = (props) => {
   
    let relatedProductsData = props.products.products.products;

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
                            {relatedProductsData.map((el) => {
                                return (
                                    <SwiperSlide key={el.id}>
                                        <CardItem id={el.id}
                                            type={el.category}
                                            images={el.images}
                                            title={el.name}
                                            price={el.price}
                                            oldPrice={el.oldPrice}
                                            rate={el.rating}
                                            path={el.id}
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



