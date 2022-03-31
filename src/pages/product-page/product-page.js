import React from "react";
import './product-page.css';
import arrow from './img/arrow.svg';
import share from './img/share.svg';
import { getProductStars } from "../../utils/getProductStars";
import { productDescription } from "./product-description";
import { ProductView } from "../../components/product-view";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const ProductPage = (props) => {


    const dispatch = useDispatch();
    const newReviews = useSelector(state => state.postReview.data);
    let currentProductId = useParams();
    let currentCard = props.products.filter(el => el.id === currentProductId.params);
    let currentProduct = currentCard[0];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentProductId])

    useEffect(() => {
        dispatch({ type: "GET_PRODUCTS" });
    }, [dispatch, newReviews])

    if (props.products.length === 0) {
        return ""
    }

    return (
        <section className="page-product category__page-women" data-test-id={`product-page-${props.type}`}>
            <div className="category-page-title">
                <div className="container">
                    <div className="bread-crumbs-block">
                        <Link key={'main'} to={`/`} className="bread-crumbs-link">
                            <span className="bread-crumbs">Home </span>
                        </Link>
                        <img src={arrow} alt="arrow-icon" className="bread-crumbs-arrow" />
                        <Link key={props.type} to={`/${props.type}`} className="bread-crumbs-link">
                            <span className="bread-crumbs">{props.type}</span>
                        </Link>
                        <img src={arrow} alt="arrow-icon" className="bread-crumbs-arrow" />
                        <span className="bread-crumbs-current">{currentProduct.name}</span>
                        <div className="share-block">
                            <img src={share} alt="share-icon" />
                            <span className="share-text">Share</span>
                        </div>
                    </div>
                    <h1 className="product-title">{currentProduct.name}</h1>
                    <div className="product-description">
                        <span className="product-description-items">
                            <span className="product-stars">{(getProductStars(currentProduct.rating))}</span>
                            <span className="product-description-item">{currentProduct.reviews.length} Reviewes</span>
                        </span>
                        <span className="product-description-items item-sku">
                            <span className="product-description-item ">SKU:</span>
                            <span className="product-description-item-value">{productDescription.sku}</span>
                        </span>
                        <span className="product-description-items item-availability">
                            <span className="product-description-item">Availability:</span>
                            <span className="product-description-item-value">{productDescription.availability}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container">
                <ProductView products={props} currentProduct={currentProduct} key={currentProduct.id} />
            </div>
        </section>
    )
}