
import React, { useRef, useState } from "react";
import './product-details.css';
import { productDescription } from "../../pages/product-page/product-description";
import clothesHanger from "./img/clothes-hanger.svg"
import heartImg from "./img/heart.svg"
import scalesImg from "./img/scales.svg"
import { detailsAdvantageList } from "../main-advantage/main-advantage-list";
import { PaymentCards } from "../payment-cards/payment-cards";
import { AdditionalInformation } from "../additional-information/add-info";
import { ProductReviews } from "../product-reviews/product-reviews";
import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/reducers/reducer";
import { useSelector } from "react-redux";
import { deleteItemFromCart } from "../../redux/reducers/reducer";

export const ProductDetails = (props) => {

    let currentProductImagesColors = props.currentProduct.images
    let currentProductSizes = props.currentProduct.sizes
    let [selectedColor, setSelectedColor] = useState(currentProductImagesColors[0].color)
    let colorBox = useRef();
    let sizeBox = useRef();
    let [selectedColorActive, setSelectedColorActive] = useState(0)
    let [selectedSizeActive, setSelectedSizeActive] = useState(0)
    let [selectedSize, setSelectedSize] = useState(currentProductSizes[0])
    const uniqueColorSet = Array.from(new Set(currentProductImagesColors.map(item => item.color)));
    let uniqueColor = uniqueColorSet.map((el) => {
        return currentProductImagesColors.find(color => color.color === el)
    });
    let [selectedImg, setSelectedImg] = useState(currentProductImagesColors[0].url)
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.itemsInCart);
    let [productName, setProductName] = useState(props.currentProduct.name);
    let [productPrice] = useState(props.currentProduct.price);
    let [productCount] = useState(1);
    let [isProductInCart, setIsProductInCart] = useState(false);

    let cartItem = {
        name: productName,
        image: selectedImg,
        color: selectedColor,
        size: selectedSize,
        price: productPrice,
        count: productCount
    }

    useEffect(() => {

        setIsProductInCart(false)
        for (let item of cartItems) {
            if (item.name === productName && item.color === selectedColor && item.size === selectedSize) {
                setIsProductInCart(true);
                break;
            }
        }

    }, [cartItems, isProductInCart, productName, selectedColor, selectedSize])

    useEffect(() => {
        setProductName(props.currentProduct.name)
        changeColorBox(0);
        changeSizeBox(0);
        changeSizeText(props.currentProduct.sizes[0]);
        changeColorText(props.currentProduct.images[0].color);
        changeImgUrl(props.currentProduct.images[0].url)
    }, [props])


    function changeColorBox(index) {
        setSelectedColorActive(index);
    }

    function changeSizeBox(index) {
        setSelectedSizeActive(index);
    }

    function changeSizeText(elem) {
        setSelectedSize(elem)
    }

    function changeColorText(item) {
        setSelectedColor(item)
    }

    function changeImgUrl(img) {
        setSelectedImg(img)
    }

    function addToCart(e) {
        e.stopPropagation();
        dispatch(setItemInCart(cartItem));
    }

    function deleteItem() {
        dispatch(deleteItemFromCart(cartItem));
    }

    return (
        <div className="product-details-inner">
            <div className="product-details" key={productDescription.id}>
                <span className="details-color">
                    <span className="product-details-title">COLOR:</span>
                    <span className="product-details-value">{selectedColor}</span>
                </span>
                <div className="details-color">
                    {uniqueColor.map((item, index) => {
                        return (
                            <img src={`https://training.cleverland.by/shop${item?.url}`} key={item.id} alt="color"
                                className={classNames("color-options", { colorOptionsActive: selectedColorActive === index })}
                                onClick={() => { changeColorText(item.color); changeColorBox(index); setSelectedImg(item.url); }} ref={colorBox} />
                        )
                    })}
                </div>
                <span className="details-size">
                    <span className="product-details-title">SIZE:</span>
                    <span className="product-details-value" >{selectedSize}</span>
                </span>
                <div className="size-options">
                    {currentProductSizes.map((elem, index) => {
                        return (
                            <div id={elem} key={elem}
                                className={classNames("size-value", { colorOptionsActive: selectedSizeActive === index })}
                                onClick={() => { changeSizeText(elem); changeSizeBox(index); }} ref={sizeBox}>{elem}
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
                <span className="price-value" key={props.currentProduct.price}>{props.currentProduct.price}</span>
                {isProductInCart ? <button className="addToCartBtn" onClick={deleteItem} data-test-id='add-cart-button'>Remove to card</button> : <button className="addToCartBtn" onClick={addToCart} data-test-id='add-cart-button'>Add to card</button>}
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
            <AdditionalInformation currentProduct={props.currentProduct} uniqueColorSet={uniqueColorSet} />
            <ProductReviews currentProduct={props.currentProduct} />
        </div>
    )
}