
import React from "react";
import './product-related.css';
import arrow from "./img/arrow.svg";
import { cardsOnProductPage } from "./product-related-list";
import { CardItem } from "../product-card";

export const ProductRelated = () => {
    return (
        <div className="product__related">
            <div className="container">
                <div className="product__related-inner">
                    <div className="product__related-title">
                        <span className="product__related-title-text ">RELATED PRODUCTS</span>
                        <span className="product__related-slider-arrows">
                            <img src={arrow} alt="arrow" className="arrows ar-left" />
                            <img src={arrow} alt="arrow" className="arrows ar-right" />
                        </span>
                    </div>
                    <div className="product__related-cards">
                        {cardsOnProductPage.map((el) => {
                            return (
                                <CardItem id={el.id}
                                    img={el.img}
                                    title={el.title}
                                    price={el.price}
                                    oldPrice={el.oldPrice}
                                    rate={el.rate}
                                    path={el.path}
                                    discount={el.discount}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}



