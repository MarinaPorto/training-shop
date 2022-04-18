import React from "react";
import './footer.css';
import { Formik } from 'formik';
import { footerNavItems } from './footer-nav-items';
import { Link } from "react-router-dom";
import facebookIcon from '../../img/facebook.svg';
import twitterIcon from '../../img/twitter.svg';
import instagramIcon from '../../img/instagram.svg';
import pinterestIcon from '../../img/pinterest.svg';
import { companies } from "./companies-list";
import { LoaderBtnFooter } from '../../components/loader-btn-footer/loader-btn-footer';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Footer = () => {

    const dispatch = useDispatch();
    const errorPostMessageFooter = useSelector(state => state.postEmailFooter.isErrorEmailFooter);
    const isPostFinishFooter = useSelector(state => state.postEmailFooter.data);
    const isSentEmailFooter = useSelector(state => state.postEmailFooter.isSentEmailFooter);
    let [isLoadingFooter, setisLoadingFooter] = useState(false);

    return (
        <div className="footer" data-test-id='footer'>
            <div className="wrapper">
                <div className="container">
                    <div className="footer__top">
                        <span className="footer__top-text">BE IN TOUCH WITH US:</span>
                        <div className="join-form">
                            <Formik
                                initialValues={{ emailFooter: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.emailFooter) {
                                        errors.emailFooter = <p className="required-field required-field-footer">Поле обязательно для заполнения</p>;
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailFooter)
                                    ) {
                                        errors.emailFooter = <p className="required-field required-field-footer">Неправильно введен email</p>;
                                    }
                                    return errors;
                                }}

                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    dispatch({ type: "POST_EMAIL_FOOTER", payload: values });
                                    setisLoadingFooter(true)
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    isValid,
                                    dirty,
                                    resetForm

                                }) => (
                                    <form onSubmit={handleSubmit} className="footer__form">
                                        <div className="email-input">
                                            <input
                                                className="footer__top-input"
                                                placeholder="Enter your email"
                                                type="email"
                                                name="emailFooter"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.emailFooter}
                                                data-test-id="footer-mail-field"
                                            />

                                            {errors.emailFooter && touched.emailFooter && errors.emailFooter}
                                            {isSentEmailFooter && <p className="post-success">Почта отравлена успешно</p>}
                                            {isSentEmailFooter ? values.emailFooter = "" : ""}
                                            {errorPostMessageFooter && <p className="required-field">Ошибка при отправке почты</p>}
                                        </div>
                                        <button type="submit" className="footer__top-button" disabled={!(isValid && dirty) || isSentEmailFooter} data-test-id="footer-subscribe-mail-button">
                                            {isLoadingFooter ? <LoaderBtnFooter /> : <div className="btn-hidden-block"></div>}
                                            {(isPostFinishFooter || errorPostMessageFooter) && setisLoadingFooter(false)}
                                            <p className="btn-text-footer">JOIN US</p>
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <ul className="header__top-social footer__top-social">
                            <li><span className="social-icon-link"><img src={facebookIcon} className="social-icon" alt="facebook-icon" /></span></li>
                            <li><span className="social-icon-link"><img src={twitterIcon} className="social-icon" alt="twitter-icon" /></span></li>
                            <li><span className="social-icon-link"><img src={instagramIcon} className="social-icon" alt="instagram" /></span></li>
                            <li><span className="social-icon-link"><img src={pinterestIcon} className="social-icon" alt="pintereste-icon" /></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-main">
                    {footerNavItems.map((item, index) => {
                        return (
                            <div className="footer__inner" key={index}>
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
                            {companies.map((el, index) => {
                                return (
                                    <img src={el} className="company-icon" alt="company-icon" key={index} />
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