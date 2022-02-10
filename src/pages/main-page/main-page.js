import React from "react";
import './main-page.css';
import { MainSliderBlock } from "../../components/main-slider";
import { MainAdvantage } from "../../components/main-advantage/main-advantage";
import { MainCategory } from "../../components/main-category/main-category";
import { OfferCards } from "../../components/main-offer";
import { MainSubscribe } from "../../components/main-subscribe/main-subscribe";
import { MainBlog } from "../../components/main-blog";


export const MainPage = () => {
    return (

        <div className="main__page">
       

        <MainSliderBlock />
        <MainAdvantage />
        <MainCategory />
        <OfferCards />
        <MainSubscribe />
        <MainBlog />
        </div>
    )


}