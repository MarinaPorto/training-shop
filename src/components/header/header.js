import React from "react";
import './header.css';
import { menuItems } from './nav-items'
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




export const Header = () => {
    return (<div className="header" data-test-id='header'>

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
                            <li><a href="#" className="social-icon-link"><img src={facebookIcon} className="social-icon" alt="facebook-icon" /></a></li>
                            <li><a href="#" className="social-icon-link"><img src={twitterIcon} className="social-icon" alt="twitter-icon" /></a></li>
                            <li><a href="#" className="social-icon-link"><img src={instagramIcon} className="social-icon" alt="instagram" /></a></li>
                            <li><a href="#" className="social-icon-link"><img src={pinterestIcon} className="social-icon" alt="pintereste-icon" /></a></li>
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
                        <nav className="nav">
                            <ul className="nav__items">
                                {menuItems.map((item) => {
                                    return (
                                        <Link key={item.id} to={`/${item.path}`} className="menu-item" data-test-id={`menu-link-${item.path}`}>
                                            <li className="nav__item">{item.title}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <ul className="header__nav-icons">
                        <li><a href="#" className="header__nav-icons-link"><img src={searchIcon} className="nav-icon" alt="search-icon" /></a></li>
                        <li><a href="#" className="header__nav-icons-link"><img src={globeIcon} className="nav-icon" alt="globe-icon" /></a></li>
                        <li><a href="#" className="header__nav-icons-link"><img src={userIcon} className="nav-icon" alt="user" /></a></li>
                        <li><a href="#" className="header__nav-icons-link shopping-bag"><img src={shoppingBagIcon} className="nav-icon" alt="shoppingBag-icon" /></a></li>
                    </ul>
                </div>
            </div>
   
                </header >
           
            </div >
       

    )
}