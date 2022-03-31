import React, { useState } from "react";
import { Formik } from 'formik';
import './main-subscribe.css';
import img01 from '../main-subscribe/img/picture1.png';
import img02 from '../main-subscribe/img/picture2.png';
import { LoaderBtn } from '../../components/loader-btn/loader-btn';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sendEmailInfo } from "../../redux/reducers/reducer-post-email";

export const MainSubscribe = () => {
    const dispatch = useDispatch();
    const errorPostMessage = useSelector(state => state.postEmail.isErrorEmail);
    const loadingPostProcess = useSelector(state => state.postEmail.isLoadingEmail);
    const isPostFinish = useSelector(state => state.postEmail.data);
    const isSentEmail = useSelector(state => state.postEmail.isSentEmail);
    console.log('isPostFinish', isPostFinish)

    let [isLoading, setisLoading] = useState(false);
    console.log('isPostFinish 0000000', isLoading)


    //   if (typeof(isPostFinish) ==='object' ) {
    //     dispatch({ type: "CHANGE_IS_SENT_EMAIL"});

    //     console.log(typeof(isPostFinish))
    //     console.log(isLoading, "isLoading")
    // }


    //   useEffect(() => {


    //  console.log("вызван диспатч")
    //  console.log('isPostFinish from use', isPostFinish)


    //   }, [dispatch, isPostFinish])

//  useEffect((hideMessage) => {

//     window.addEventListener("unload", function() {
//         console.log("ухожу ухожу")
//         hideMessage()
//       });
//     }, [hideMessage])

      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // function hideMessage() {
    //     console.log(isSentEmail, "aaaaaaaaaaaa")
    //       if (isSentEmail) { 
    //         console.log(isSentEmail, "bbbbbbbbbbbb")
    //         dispatch({ type: "CHANGE_IS_SENT_EMAIL"})

    // }
    // }

    // window.onpagehide = event => {
    //     if (event.persisted) {
    //         dispatch({ type: "CHANGE_IS_SENT_EMAIL"})

    //     }
    //   }

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
                                // dispatch(sendEmailInfo(values));
                                dispatch({ type: "POST_EMAIL", payload: values});
                                setisLoading(true)
                                console.log(isLoading, "isLoading 11111 во время сабмита");
                                console.log(JSON.stringify(values, null, 2));
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
                                        {console.log("isSubmitting btn", isSubmitting)}

                                        {console.log(isLoading, "isLoading после сабмита до лоудера")}
                                        {isLoading ? <LoaderBtn /> : <div className="btn-hidden-block"></div>}
                                       
                                        {(isPostFinish || errorPostMessage) && setisLoading(false)}
                                         {console.log(isLoading, "isLoading после смены на фолс")}
                                        {console.log(isPostFinish, "isPostFinishisPostFinish")}
                                        {console.log(isLoading, "isLoadingisLoadingisLoading")}
                                        {console.log(errorPostMessage, "errorPostMessageerrorPostMessage")}

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