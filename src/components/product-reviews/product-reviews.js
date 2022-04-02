import React, { useState } from "react";
import './product-reviews.css';
import { getProductStars } from "../../utils/getProductStars";
import annotation from "./img/annotation.svg"
import { ModalReview } from '../../components/modal-review/modal-review'
import { changeIsSentStatus } from "../../redux/reducers/reducer-post-review"
import { useDispatch } from "react-redux"

export const ProductReviews = (props) => {

    let [isReviewOpen, setisReviewOpen] = useState(false)

    function openReview() {
        setisReviewOpen(!isReviewOpen)
        document.body.style.overflow = "hidden";
    }

    let reviewsProduct = props.currentProduct.reviews;
    let dispatch = useDispatch()

    function changeMessage() {
        dispatch(changeIsSentStatus());
    }

    let currentProductID = props.currentProduct.id;
  
    return (
        <div className="product-reviews-inner">
            <h4 className="add-info-title">REVIEWS</h4>
            <div className="review-block">
                <div className="review-block-stars">{getProductStars(props.currentProduct.rating)}</div>
                <span className="review-block-text">{reviewsProduct.length} Reviews</span>
                <button className="review-btn" onClick={() => { openReview(); changeMessage() }} data-test-id="review-button">
                    <img src={annotation} alt="write-icon" className="write-icon" />
                    <span className="review-block-text">Write a review</span>
                </button>
                {isReviewOpen && <ModalReview currentProductID={currentProductID} isReviewOpen={isReviewOpen} setisReviewOpen={setisReviewOpen} />}
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



