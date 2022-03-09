
import React from "react";
import './add-info.css';
import { productDescription } from "../../pages/product-page/product-description";


export const AdditionalInformation = (props) => {
    const colorsSet = props.uniqueColorSet.join(", ");
    const sizesSet = props.currentProduct.sizes.join(", ");
    console.log(sizesSet)
    

    return (
        <div className="add-info-inner">
            <h4 className="add-info-title">ADDITIONAL INFORMATION</h4>
            <div className="add-info-detail">
                <span className="add-info-details">
                    <span className="add-info-item" >Color: </span>
                    <span className="add-info-value">{colorsSet}</span>
                </span>
                <span className="add-info-details">
                    <span className="add-info-item" >Size:</span>
                    <span className="add-info-value">{sizesSet}</span>
                </span>
                <span className="add-info-details">
                    <span className="add-info-item" >Material:</span>
                    <span className="add-info-value">{props.currentProduct.material}</span>
                </span>
            </div>
        </div>
    )
}



