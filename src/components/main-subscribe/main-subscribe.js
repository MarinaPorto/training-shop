import React, { useState } from "react";
import { Formik } from 'formik';
import './main-subscribe.css';
import img01 from '../main-subscribe/img/picture1.png';
import img02 from '../main-subscribe/img/picture2.png';
import { LoaderBtn } from '../../components/loader-btn/loader-btn';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

export const MainSubscribe = () => {
    const dispatch = useDispatch();
    const errorPostMessage = useSelector(state => state.postEmail.isErrorEmail);
    const isPostFinish = useSelector(state => state.postEmail.data);
    const isSentEmail = useSelector(state => state.postEmail.isSentEmail);
    let [isLoading, setisLoading] = useState(false);

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
                        <Formik
                            initialValues={{ email: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = <p className="required-field">Поле обязательно для заполнения</p>;
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = <p className="required-field">Неправильно введен email</p>;
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                dispatch({ type: "POST_EMAIL", payload: values });
                                setisLoading(true)
                                resetForm();
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
                                resetForm,
                            }) => (
                                <form onSubmit={handleSubmit} className="main-page__form">
                                    <input
                                        className="subscribe-block-banner-input"
                                        placeholder="Enter your email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        data-test-id="main-subscribe-mail-field"
                                    />
                                    {errors.email && touched.email && errors.email}
                                    {isSentEmail ? <p className="post-success">Почта отравлена успешно</p> : ""}
                                    {errorPostMessage && <p className="required-field">Ошибка при отправке почты</p>}
                                    <button type="submit" className="subscribe-block-banner-btn" disabled={!(isValid && dirty) || isSubmitting} data-test-id="main-subscribe-mail-button">
                                        {isLoading ? <LoaderBtn /> : <div className="btn-hidden-block"></div>}
                                        {(isPostFinish || errorPostMessage) && setisLoading(false)}
                                        <p className="btn-text">Subscribe</p>
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}