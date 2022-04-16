import React from "react";
import { CartСompletionSuccess } from "../success-cart/cart-success";
import { CartСompletionError } from "../error-cart/cart-error";
import { useSelector } from "react-redux";


export const CartСompletion = (props) => {
    console.log("CartСompletionSuccess", props)

    let postedOrderMessage = useSelector(state => state.postOrder.data.data);
    console.log(postedOrderMessage)

    return (
        <div className="cart-inner">
            <CartСompletionSuccess closeCart={props.closeCart}/>
            {/* <CartСompletionError /> */}
        </div>
    )
}



