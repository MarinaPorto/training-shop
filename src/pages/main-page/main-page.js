import React from "react";
import './main-page.css';
import { MainSliderBlock } from "../../components/main-slider";
import { MainAdvantage } from "../../components/main-advantage/main-advantage";
import { MainCategory } from "../../components/main-category/main-category";
import { OfferCards } from "../../components/main-offer";
import { MainSubscribe } from "../../components/main-subscribe/main-subscribe";
import { MainBlog } from "../../components/main-blog";


export const MainPage = (props) => {

    const womenCategory = props.products.women;
    const menCategory = props.products.men;

    return (
        <div className="main__page">
            <MainSliderBlock />
            <MainAdvantage />
            <MainCategory products={womenCategory} type="women" />
            <MainCategory products={menCategory} type="men" />
            <OfferCards />
            <MainSubscribe />
            <MainBlog />
        </div>
    )
}