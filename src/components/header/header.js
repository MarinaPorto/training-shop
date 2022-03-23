import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import Phone from '../../img/phone.svg';
import location from '../../img/location-marker.svg';
import clock from '../../img/clock.svg';
import facebookIcon from '../../img/facebook.svg';
import twitterIcon from '../../img/twitter.svg';
import instagramIcon from '../../img/instagram.svg';
import pinterestIcon from '../../img/pinterest.svg';
import logo from '../../img/logo.svg';
import searchIcon from '../../img/search.svg';
import globeIcon from '../../img/globe.svg';
import userIcon from '../../img/user.svg';
import shoppingBagIcon from '../../img/shopping-bag.svg';
import { Navigation } from "./navigation/navigation";
import NavState from '../../context/navState';
import MainMenu from './mainMenu';
import { Cart } from "../cart/cart";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Header = () => {

    let cartIcon = useRef();
    let [checkOpenCart, setCheckOpenCart] = useState(false)

    function openCart() {
        setCheckOpenCart(true)
        document.body.style.overflow = "hidden";
    }

    const cartItemsCount = useSelector(state => state.cart.itemsInCart).length;

    return (
        <div className="header" data-test-id='header'>
            <header className="header">
                <div className="wrapper">
                    <div className="container">
                        <div className="header__top">
                            <ul className="header__top-contacts">
                                <li>
                                    <img src={Phone} className="contacts-icon" alt="phone-icon" />
                                    <span>+375 29 100 20 30</span>
                                </li>
                                <li><img src={location} className="contacts-icon" alt="location-icon" />
                                    <span>Belarus, Gomel, Lange 17</span></li>
                                <li><img src={clock} className="contacts-icon" alt="clock-icon" />
                                    <span>All week 24/7</span></li>
                            </ul>
                            <ul className="header__top-social">
                                <li><span className="social-icon-link"><img src={facebookIcon} className="social-icon-header" alt="facebook-icon" /></span></li>
                                <li><span className="social-icon-link"><img src={twitterIcon} className="social-icon-header" alt="twitter-icon" /></span></li>
                                <li><span className="social-icon-link"><img src={instagramIcon} className="social-icon-header" alt="instagram" /></span></li>
                                <li><span className="social-icon-link"><img src={pinterestIcon} className="social-icon-header" alt="pintereste-icon" /></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header__main">
                        <Link to='/' className="header-nav-logo" data-test-id='header-logo-link'>
                            <img src={logo} alt="logo" className="main_logo" />
                        </Link>
                        <div className="menu" data-test-id="menu">
                            <Navigation />
                        </div>

                        <ul className="header__nav-icons">
                            <li><span className="header__nav-icons-link"><img src={searchIcon} className="nav-icon" alt="search-icon" /></span></li>
                            <li><span className="header__nav-icons-link"><img src={globeIcon} className="nav-icon" alt="globe-icon" /></span></li>
                            <li><span className="header__nav-icons-link"><img src={userIcon} className="nav-icon" alt="user" /></span></li>
                            <li ref={cartIcon} onClick={(openCart)} data-test-id='cart-button'><span className="header__nav-icons-link shopping-bag"><img src={shoppingBagIcon} className="nav-icon" alt="shoppingBag-icon" /><span className="count__products">{cartItemsCount}</span></span></li>
                        </ul>

                        <NavState>

                            <MainMenu />
                        </NavState>
                    </div>
                </div>
                <Cart checkOpenCart={checkOpenCart} setCheckOpenCart={setCheckOpenCart} />
            </header >
        </div >
    )
}