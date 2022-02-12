
import React from "react";
import './payment-cards.css';
import { paymentCardList } from "./payment-cards-list";


export const PaymentCards = () => {
    return (
        <div className="payment-cards-inner">
            {paymentCardList.map((el) => {
                return (
                    <div className="payment-card-img">
                        <img src={el} alt="card-img" />
                    </div>
                )
            })}
        </div>
    )
}



