import React from "react";
import { CartСompletionSuccess } from "../success-cart/cart-success";
import { CartСompletionError } from "../error-cart/cart-error";
import { useSelector } from "react-redux";


export const CartСompletion = (props) => {
    let postedOrderMessage = useSelector(state => state.postOrder.data);
    let message;

    if (Object.keys(postedOrderMessage).length > 0) {
        message = postedOrderMessage.data.message
    }
   
    return (
        <div className="cart-inner">                   
            { message === "success" ? <CartСompletionSuccess closeCart={props.closeCart} /> : <CartСompletionError message={message}/>}
        </div>
    )
}



