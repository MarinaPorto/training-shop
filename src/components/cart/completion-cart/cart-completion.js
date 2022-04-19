import React from "react";
import { CartСompletionSuccess } from "../success-cart/cart-success";
import { CartСompletionError } from "../error-cart/cart-error";
import { useSelector } from "react-redux";


export const CartСompletion = (props) => {
    let postedOrderMessage = useSelector(state => state.postOrder.data);
    console.log("postedOrderMessage", postedOrderMessage)
    // let message;
    let messageSuccess;
    let messageError;

    // if (Object.keys(postedOrderMessage).length > 0) {
    //     if (postedOrderMessage.data.message) {
    //         messageSuccess = postedOrderMessage.data.message
    //         console.log("messssssssssssssss success", messageSuccess)
    //     } else {
    //         messageError = postedOrderMessage
    //         console.log("messssssssssssssss messageError", messageError)
    //     }
    //     console.log("postedOrderMessage длинна больше нуля", postedOrderMessage)

    // }

    if (postedOrderMessage.length > 0) {
        if (postedOrderMessage === "success" ) {
            messageSuccess = postedOrderMessage
            console.log("messssssssssssssss success", messageSuccess)
        } else {
            messageError = postedOrderMessage
            console.log("messssssssssssssss messageError", messageError)
        }
        console.log("postedOrderMessage длинна больше нуля", postedOrderMessage)

    }

    return (
        <div className="cart-inner">
            {messageSuccess === "success" ? <CartСompletionSuccess closeCart={props.closeCart} /> : <CartСompletionError messageError={messageError} />}
        </div>
    )
}



