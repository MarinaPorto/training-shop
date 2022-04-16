import React from "react";
import '../../cart/completion-cart/cart-completion.css';
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/reducers/reducer";


export const CartСompletionSuccess = (props) => {
    console.log("CartСompletionSuccess", props)
    let closeCart = props.closeCart;
    const dispatch = useDispatch();

    return (
        <>
            <div className="cart-inner-content ">
                <div className="cart-empty-text cart-wrapper-inner">
                    Thank you <br /> for your order  <br />
                    <p className="cart-completion-text">
                        Information about your order <br />
                        will appear in your e-mail.
                    </p>
                    <p className="cart-completion-text">
                        Our manager will call you back.
                    </p>
                </div>

            </div>
            <button className="empty-cart-btn" onClick={() => {
                closeCart();
                dispatch(clearCart());
                dispatch({ type: "OPEN_CART_ITEM" });
            }}>back to shopping</button></>
    )
}

