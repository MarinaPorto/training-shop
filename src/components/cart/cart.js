
import React from "react";
import './cart.css';
import closecarticon from './img/1.svg';
import classNames from "classnames";
import { useRef } from "react";
import { CartEmpty } from "./empty-cart";
import { useSelector } from "react-redux";
import { CartFull } from "./full-cart";


export const Cart = (props) => {

    const closeCartIcon = useRef()

    function closeCart() {
        props.setCheckOpenCart(false)
        document.body.style.overflow = "";
    }

    const cartItems = useSelector(state => state.cart.itemsInCart);

    return (
        <div className="container">
            <div className={classNames("cart", { cart__open: props.checkOpenCart })} onClick={(closeCart)}>
                <div className="cart__content" onClick={e => e.stopPropagation()} data-test-id='cart'>
                    <div className="cart-title-wrapper">
                        <div className="cart__title">Shopping Cart</div>
                        <button ref={closeCartIcon} onClick={(closeCart)} className="close-cart-icon-btn">
                           <img src={closecarticon} className="close-cart-icon" alt="close" />  
                        </button>
                       
                    </div>
                    {
                        cartItems.length > 0 ? <CartFull cartItems={cartItems} closeCart={closeCart} /> : <CartEmpty closeCart={closeCart} />
                    }
                    <p></p>
                </div>
            </div>
        </div>
    )
}



