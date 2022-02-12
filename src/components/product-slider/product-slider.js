
import React from "react";
import './product-slider.css';
import { productImgSlider } from "../../pages/product-page/product-description";
import { productDescription } from "../../pages/product-page/product-description";
import arrow from "./img/arrow.svg"

export const ProductSlider = () => {
    return (
        <div className="product__slider-inner">
            <div className="product__slider-mini">
                <div className="slider-arrows ">
                    <img src={arrow} alt="arrow-up" className="arrow-up arrows" />
                    <img src={arrow} alt="arrow-down" className="arrow-down arrows" />
                </div>
                <div className="product-slider-mini">
                    {productImgSlider.map((el) => {
                        return (
                            <img src={el} alt="img-preview" className="slider-img-preview " />
                        )
                    })}
                </div>
            </div>
            <div className="product__slider">
                {productDescription.map((elemet) => {
                    return (
                        <img src={elemet.img} alt="img-slider" className="slider-img" />
                    )
                })}
                <div className="product-slider-arrows">
                    <img src={arrow} alt="arrow-left" className="arrow-left arrows" />
                    <img src={arrow} alt="arrow-right" className="arrow-right arrows" />
                </div>
            </div>
            <div className="product__description-all">
            </div>
        </div>
    )
}



