import React from "react";
import './main-page.css';
import { MainSliderBlock } from "../../components/main-slider";
import { MainAdvantage } from "../../components/main-advantage/main-advantage";
import { MainCategory } from "../../components/main-category/main-category";
import { OfferCards } from "../../components/main-offer";
import { MainSubscribe } from "../../components/main-subscribe/main-subscribe";
import { MainBlog } from "../../components/main-blog";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const MainPage = (props) => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "CHANGE_IS_SENT_EMAIL" })
    }, [dispatch])

    const womenCategory = props.products.women;
    const menCategory = props.products.men;

    return (
        <div className="main__page" >
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