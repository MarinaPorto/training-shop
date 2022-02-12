
import React from "react";
import './product-view.css';
import { ProductSlider } from "../product-slider/product-slider";
import { ProductDetails } from "../product-details";
import { ProductRelated } from "../related-product/product-related";

export const ProductView = () => {
    return (
        <section className="product__view-block">
            <div className="container">
                <div className="product__view-inner">
                    <ProductSlider />
                    <ProductDetails />
                </div>
                <ProductRelated />
            </div>
        </section>

    )
}



