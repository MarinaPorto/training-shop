
import React from "react";
import './cart-empty.css';




export const CartEmpty = (props) => {


    return (
        <div className="cart-inner">
            <div className="cart-empty-text">
                Sorry,<br /> your cart <br />
                is empty
            </div>
            <button className="empty-cart-btn" onClick={(props.closeCart)}>back to shopping</button>

        </div>
    )
}



