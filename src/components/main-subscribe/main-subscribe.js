import React from "react";
import './main-subscribe.css';
import img01 from '../main-subscribe/img/picture1.png';
import img02 from '../main-subscribe/img/picture2.png';


export const MainSubscribe = () => {
    return (
        <section className="subscribe-block">
            <div className="container">
                <div className="subscribe-block-inner">
                    <img src={img01} alt="person" className="subscribe-block-img1" />
                    <img src={img02} alt="person" className="subscribe-block-img2" />
                    <div className="subscribe-block-banner">
                        <span className="subscribe-block-banner-title">Special Offer</span>
                        <span className="subscribe-block-banner-text">Subscribe</span>
                        <span>
                            <span className="subscribe-block-banner-text">And</span>
                            <span className="subscribe-block-banner-bright">Get 10% Off</span>
                        </span>
                        <input type="text" className="subscribe-block-banner-input" placeholder="Enter your email" />
                        <button className="subscribe-block-banner-btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}