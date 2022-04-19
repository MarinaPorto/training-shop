import React from "react";
import { useDispatch } from "react-redux";


export const CartСompletionError = (props) => {
    let postedOrderMessage = props.messageError

    const dispatch = useDispatch();

    return (
        <>
            <div className="cart-inner-content">
                <div className="cart-empty-text cart-wrapper-inner" >
                    Sorry, <br />
                    your payment <br /> has not been<br /> processed.
                    <p className="cart-completion-text">
                        {postedOrderMessage}
                    </p>

                </div>
            </div>
            <div className="cart-btns cart-btns-error">
                <button className="empty-cart-btn" type="submit" onClick={() => {
                    dispatch({ type: "OPEN_PAYMENT_ITEM" })
                }}>back to payment</button>
                <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_CART_ITEM" }) }}>View Cart</button>
            </div>
        </>
    )
}



