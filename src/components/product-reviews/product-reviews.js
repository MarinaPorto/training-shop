
import React from "react";
import './product-reviews.css';
import { getProductStars } from "../../utils/getProductStars";
import { productReviews } from "./product-reviews-list";
import annotation from "./img/annotation.svg"


export const ProductReviews = () => {
    return (
        <div className="product-reviews-inner">
            <h4 className="add-info-title">REVIEWS</h4>
            <div className="review-block">
                <div className="review-block-stars">{getProductStars(5)}</div>
                <span className="review-block-text">2 Reviews</span>
                <img src={annotation} alt="write-icon" className="write-icon" />
                <span className="review-block-text">Write a review</span>
            </div>
            <div className="product-reviews-content">
                {productReviews.map((el) => {
                    return (
                        <div className="user-review">
                            <span className="user-review-info">
                                <span className="user-review-name">{el.userName}</span>
                                <span className="user-review-date">{el.date}</span>
                                <div className="user-review-rate">{getProductStars(el.rate)}</div>
                            </span>
                            <div className="user-review-text">{el.text}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}



