
import React from "react";
import './product-view.css';
import { ProductSlider } from "../product-slider/product-slider";
import { ProductDetails } from "../product-details";
import { ProductRelated } from "../related-product/product-related";

export const ProductView = (props) => {
    return (
        <section className="product__view-block">
            <div className="container">
                <div className="product__view-inner">
                    <ProductSlider products={props} currentProduct={props.currentProduct}/>
                    <ProductDetails products={props}   currentProduct={props.currentProduct}/>
                </div>
                <ProductRelated products={props}/>
            </div>
        </section>

    )
}



