
import React from "react";
import './product-details.css';
import { productDescription } from "../../pages/product-page/product-description";
import { productImgColors } from "../../pages/product-page/product-description";
import clothesHanger from "./img/clothes-hanger.svg"
import heartImg from "./img/heart.svg"
import scalesImg from "./img/scales.svg"
import { detailsAdvantageList } from "../main-advantage/main-advantage-list";
import { PaymentCards } from "../payment-cards/payment-cards";
import { AdditionalInformation } from "../additional-information/add-info";
import { ProductReviews } from "../product-reviews/product-reviews";

export const ProductDetails = () => {
    return (
        <div className="product-details-inner">
            <div className="product-details" key={productDescription.id}>
                <span className="details-color">
                    <span className="product-details-title">COLOR:</span>
                    <span className="product-details-value">{productDescription.color}</span>
                </span>
                <div className="details-color">
                    {productImgColors.map((item) => {
                        return (
                            <img src={item} alt="color" className="color-options" />
                        )
                    })}
                </div>
                <span className="details-size">
                    <span className="product-details-title">SIZE:</span>
                    <span className="product-details-value" >{productDescription.size}</span>
                </span>
                <div className="size-options">
                    {productDescription.sizes.map((elem) => {
                        return (
                            <div className="size-value" id={elem}>{elem}
                            </div>
                        )
                    })}
                </div>
                <div className="size-guide">
                    <img src={clothesHanger} alt="clothes-hanger" className="clothes-hanger" />
                    <span className="size-guide-text">Size guide</span>
                </div>
            </div>



            <div className="product-details-price">
                <span>$</span>

                <span className="price-value" key={productDescription.price}>{productDescription.price}</span>

                <button className="add-to-card-btn">Add to card</button>
                <img src={heartImg} alt="heart-img" className="heart-img" />
                <img src={scalesImg} alt="heart-img" />
            </div>
            <div className="details-adventages">
                {detailsAdvantageList.map((e) => {
                    return (
                        <div className="adventages-item" key={e.id}>
                            <img src={e.img} alt="icon" />
                            <span className="adventages-item-text">{e.text}</span>
                        </div>
                    )
                })}
            </div>
            <div className="details-guaranteed">
                <span className="details-guaranteed-title">guaranteed safe checkout</span>
            </div>
            <PaymentCards />
            <div className="product-details-price  product-details-description">DESCRIPTION</div>
            <AdditionalInformation />
            <ProductReviews />
        </div>
    )
}



