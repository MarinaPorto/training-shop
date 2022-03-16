
import React from "react";
import './product-reviews.css';
import { getProductStars } from "../../utils/getProductStars";
import annotation from "./img/annotation.svg"


export const ProductReviews = (props) => {
    let reviewsProduct = props.currentProduct.reviews;
    return (
        <div className="product-reviews-inner">
            <h4 className="add-info-title">REVIEWS</h4>
            <div className="review-block">
                <div className="review-block-stars">{getProductStars(props.currentProduct.rating)}</div>
                <span className="review-block-text">{reviewsProduct.length} Reviews</span>
                <img src={annotation} alt="write-icon" className="write-icon" />
                <span className="review-block-text">Write a review</span>
            </div>
            <div className="product-reviews-content">
                {reviewsProduct.map((el, index) => {
                    return (
                        <div className="user-review" key={index}>
                            <span className="user-review-info">
                                <span className="user-review-name">{el.name}</span>
                                <span className="user-review-date"></span>
                                <div className="user-review-rate">{getProductStars(el.rating)}</div>
                            </span>
                            <div className="user-review-text">{el.text}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}



