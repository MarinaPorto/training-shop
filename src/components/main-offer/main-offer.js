import React from "react";
import './main-offer.css';
import { Link } from "react-router-dom";
import { offerCards } from "./offer-cards";


export const OfferCards = () => {
    return (
        <div className="offer_cards">
            <div className="container">
                <div className="offer_cards-inner">
                    {offerCards.map((el) => {
                        return (
                            <Link to={`/${el.path}`} key={el.id} className="offer_card-link">
                                <div className="offer_card">
                                    <img src={el.img} alt="offer-card" />
                                    <div className="offer-card-banner">
                                        <span className="offer-card-banner-title">{el.title}</span>
                                        <span className="offer-card-banner-text-inner">
                                            <span className="offer-card-banner-text">{el.text}</span>
                                            {el.brightText ? <span className="offer-card-banner-bright">{el.brightText}</span> : ""}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}