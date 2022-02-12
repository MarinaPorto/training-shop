import React from "react";
import './product-page.css';
import arrow from './img/arrow.svg';
import share from './img/share.svg';
// import adjustments from './img/adjustments.svg';
// import viewLlist from './img/view-list.svg';
// import viewGrid from './img/view-grid.svg';
// import chevronRight from './img/chevron-right.svg';
// import { CardItem } from "../../components/product-card";
import { getProductStars } from "../../utils/getProductStars";
import { productDescription } from "./product-description";
import { ProductView } from "../../components/product-view";

export const ProductPage = () => {
    return (
        <section className="category__page-women">
            <div className="category-page-title">

                {productDescription.map((el) => {
                    return (
                        <div className="container">
                            <div className="bread-crumbs-block">
                                <span className="bread-crumbs">Home</span>
                                <img src={arrow} alt="arrow-icon" className="bread-crumbs-arrow" />
                                <span className="bread-crumbs">Women</span>
                                <img src={arrow} alt="arrow-icon" className="bread-crumbs-arrow" />
                                <span className="bread-crumbs-current">{el.title}</span>
                                <div className="share-block">
                                    <img src={share} alt="share-icon" />
                                    <span className="share-text">Share</span>
                                </div>
                            </div>
                            <h1 className="product-title">{el.title}</h1>
                            <div className="product-description">
                                <span className="product-description-items">
                                    <span className="product-stars">{(getProductStars(el.rate))}</span>
                                    <span className="product-description-item">{el.reviews} Reviewes</span>
                                </span>
                                <span className="product-description-items item-sku">
                                    <span className="product-description-item ">SKU:</span>
                                    <span className="product-description-item-value">{el.sku}</span>
                                </span>
                                <span className="product-description-items item-availability">
                                    <span className="product-description-item">Availability:</span>
                                    <span className="product-description-item-value">{el.availability}</span>
                                </span>
                            </div>
                        </div>
                    )

                })}



            </div>
            <div className="container">
                <ProductView />
            </div>

        </section >
    )
}
