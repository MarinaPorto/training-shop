import React from "react";
import './cart.css';
import closecarticon from './img/1.svg';
import classNames from "classnames";
import { useRef } from "react";
import { CartEmpty } from "./empty-cart";
import { useSelector } from "react-redux";
import { CartFull } from "./full-cart";
import { DeliveryInfoCart } from "./delivery-cart";
import { PaymentCart } from './payment-cart';
import { CartСompletion } from "./completion-cart/cart-completion";

export const Cart = (props) => {
    console.log("CartCartCartCart", props)

    const closeCartIcon = useRef();
    const cartItems = useSelector(state => state.cart.itemsInCart);
    let isCart = useSelector(state => state.cartItems.isCart);
    let isPayment = useSelector(state => state.cartItems.isPayment);
    let isDelivery = useSelector(state => state.cartItems.isDelivery);
    let isCartCompleition = useSelector(state => state.cartItems.isCartCompleition);

    function closeCart() {
        props.setCheckOpenCart(false)
        document.body.style.overflow = "";
    }

    function selectCartStep() {
        if (cartItems.length > 0 && isCart && !isPayment && !isDelivery) {
            return <CartFull cartItems={cartItems} closeCart={closeCart} />
        } else if (cartItems.length > 0 && !isCart && !isPayment && isDelivery) {
            return <DeliveryInfoCart />
        } else if (cartItems.length > 0 && !isCart && isPayment && !isDelivery) {
            return <PaymentCart />
        }
        else if (isCartCompleition) {
            return <CartСompletion closeCart={closeCart}/>
        } else {
            return <CartEmpty closeCart={closeCart} />
        }
    }

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
                    {selectCartStep()}
                    <p></p>
                </div>
            </div>
        </div>
    )
}



