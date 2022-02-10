import React from "react";
import './footer.css';
import { footerNavItems } from './footer-nav-items';
import { Link } from "react-router-dom";
import facebookIcon from '../../img/facebook.svg';
import twitterIcon from '../../img/twitter.svg';
import instagramIcon from '../../img/instagram.svg';
import pinterestIcon from '../../img/pinterest.svg';
import { companies } from "./companies-list";

export const Footer = () => {
    return (
        <div className="footer" data-test-id='footer'>
            <div className="wrapper">
                <div className="container">
                    <div className="footer__top">
                        <span className="footer__top-text">BE IN TOUCH WITH US:</span>
                        <div className="join-form">
                            <input type="text" className="footer__top-input" placeholder="Enter your email" />
                            <button className="footer__top-button">JOIN US</button>
                        </div>
                        <ul className="header__top-social footer__top-social">
                            <li><a href="#" className="social-icon-link"><img src={facebookIcon} className="social-icon" alt="facebook-icon" /></a></li>
                            <li><a href="#" className="social-icon-link"><img src={twitterIcon} className="social-icon" alt="twitter-icon" /></a></li>
                            <li><a href="#" className="social-icon-link"><img src={instagramIcon} className="social-icon" alt="instagram" /></a></li>
                            <li><a href="#" className="social-icon-link"><img src={pinterestIcon} className="social-icon" alt="pintereste-icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-main">
                    {footerNavItems.map((item) => {
                        return (
                            <div className="footer__inner">
                                <span className="footer__nav-title" key={item.id}>{item.title}</span>
                                <ul className="footer-nav-items">
                                    {item.items.map((el) => {
                                        return (
                                            <Link to={`/${el.path}`} data-test-id={`footer-nav-link-${el.path}`} key={el.id} className="footer-link">
                                                {el.picture ? <img src={el.picture} alt="icon" className="footer-icon" /> : ""}
                                                <li className="footer-nav-item">{el.nameItem}</li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <span className="footer__bottom-copy">Copyright © 2032 all rights reserved</span>
                        <div className="company">
                            {companies.map((el) => {
                                return (
                                    <img src={el} className="company-icon" alt="company-icon" />
                                )
                            })}
                        </div>
                        <span className="footer__bottom-copy">Clevertec.ru/training</span>
                    </div>
                </div>
            </div>
        </div>
    )
}