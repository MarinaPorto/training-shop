import React from "react";
import { useDispatch } from "react-redux";


export const CartСompletionError = () => {

    const dispatch = useDispatch();

    return (
        <div className="cart-inner-content">
            <div className="cart-empty-text">
                Sorry, <br />
                your payment <br /> has not been<br /> processed.
                <p className="cart-completion-text">
                    Failed to pay for the order, the <br />
                    problem is on the side of the bank.
                </p>

            </div>

            <div className="cart-btns">
                <button className="empty-cart-btn" type="submit" onClick={() => {
                    dispatch({ type: "OPEN_PAYMENT_ITEM" })
                }}>Further</button>
                <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_CART_ITEM" }) }}>View Cart</button>
            </div>
        </div>
    )
}



