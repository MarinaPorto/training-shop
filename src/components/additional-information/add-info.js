
import React from "react";
import './add-info.css';
import { productDescription } from "../../pages/product-page/product-description";


export const AdditionalInformation = () => {
    return (
        <div className="add-info-inner">
            <h4 className="add-info-title">ADDITIONAL INFORMATION</h4>
            <div className="add-info-detail">
                <span className="add-info-details">
                    <span className="add-info-item" >Color</span>
                    <span className="add-info-value">{productDescription.colors}</span>
                </span>
                <span className="add-info-details">
                    <span className="add-info-item" >Size:</span>
                    <span className="add-info-value">{productDescription.sizes2}</span>
                </span>
                <span className="add-info-details">
                    <span className="add-info-item" >Material:</span>
                    <span className="add-info-value">{productDescription.material}</span>
                </span>
            </div>
        </div>
    )
}



