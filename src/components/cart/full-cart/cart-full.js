
// import React, { useEffect, useState } from "react";
import { CartItem } from "../cart-item/cart-item";
import './cart-full.css';
// import classNames from "classnames";
import { useLayoutEffect } from "react";

export const CartFull = (props) => {

    let itemsCart = props.cartItems;

    // let [pageHeight, setPageHeight] = useState(document.documentElement.clientHeight);

    // let pageHeight = document.documentElement.clientHeight;

    // let isNeedScroll = (pageHeight - 180)  <  itemsCart.length * 135;
    // console.log("pageHeight", pageHeight)
    // console.log("isNeedScroll", isNeedScroll)
    // console.log("itemsCart.length", itemsCart.length)
    let totalPrice = props.cartItems.reduce((total, product) => total += product.price, 0);


    // useEffect(() => {
    //     setPageHeight(document.documentElement.clientHeight)

    // }, [window.innerHeight])

    useLayoutEffect(() => {
        console.log("useLayoutEffect")

    }, [])

    return (
        <div className="cart-full-inner">
            <div className="cart-full-content">
                <div className="cart__bread-crumbs">
                    <ul className='cart__bread-crumbs-list'>
                        <li className="cart__bread-crumb cart__bread-crumb-active">Item in Cart <span className="cart-crumbs-separator">/</span></li>
                        <li className="cart__bread-crumb">Delivery Info <span className="cart-crumbs-separator">/</span></li>
                        <li className="cart__bread-crumb">Payment</li>
                    </ul>
                </div>

                {/* <div className={classNames("cart-items", { cartItemsScroll: isNeedScroll })}> */}
                <div className="cart-full-content">
                    <div className="cart-items cartItemsScroll">
                        {props.cartItems.map((el) => {
                            return (
                                <CartItem itemsCart={itemsCart} cartItem={el} />
                            )
                        })}
                    </div>
                    <div className="cart-btns">
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {Math.floor(totalPrice * 100) / 100}</span>
                        </div>
                        <button className="empty-cart-btn">Further</button>
                        <button className="empty-cart-btn full-cart-btn" onClick={(props.closeCart)}>View Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



