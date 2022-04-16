import './card-payment-cart.css';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import classNames from "classnames";
import { useForm } from "react-hook-form";
import eye from "../img/eye.svg";
import eyeOpen from "../img/eyeopen.svg";




export const CardPaymentItem = (props) => {
    const { register, handleSubmit } = useForm();
    console.log("props CardPaymentItem", props)
    let [inputType, setInputType] = useState(false)
    let [inputOnFocus, setInputOnFocus] = useState(false)
    const dispatch = useDispatch();
    const cardNumber = (value) => {
        return value.replace(/\s/g, "").match(/\d{1,4}/g)?.join(" ") || ""

    }
    const cardDate = (value) => {
        return value.replace(/\W/gi, '').replace(/(.{2})/g, '$1/').substring(0, 5);
    }


    function limitStr(str, n) {
        if (!n) return str;
        return str.substr(0, n)
    }

    return (
        <div className='delivery-info-inner'>
            <Formik
                initialValues={{
                    paymentMethod: "Сard",
                    card: '',
                    cardDate: '',
                    cardCVV: '',
                    cashEmail: ''
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.card) {
                        errors.card = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (
                        !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm.test(values.cardDate)
                    ) {
                        errors.card = <p className="required-field required-field-error">Неправильно введен номер карты</p>;
                    }
                    // if (!values.cardDate) {
                    //     errors.cardDate = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    // } else if (
                    //     !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm.test(values.cardDate)
                    // ) {
                    //     errors.cardDate = <p className="required-field required-field-error">Неправильно введена дата</p>;
                    // }
                    if (!values.cardCVV) {
                        errors.cardCVV = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (
                        !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm.test(values.cardCVV)
                    ) {
                        errors.cardCVV = <p className="required-field required-field-error">Неправильно введен CVV</p>;
                    }
                    return errors;
                }}
                onSubmit={(values, errors) => {
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
                    mask,
                    isValid,
                    setFieldValue,
                    getValue,
                    getSelectedValue,

                }) => (

                    <form onSubmit={handleSubmit}>
                        {/* <div className="contact-item">
                            <label htmlFor="card" className='phone-label'>CARD</label>
                            <IMaskInput
                                // mask={phoneNumberMask}
                                className={classNames("input-box", { inputError: errors.phone })}
                                placeholder="_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _ "
                                // className='input-box'
                                type="number"
                                name="card"
                                id='card'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.card}
                            />
                            {errors.card && touched.card && errors.card}
                        </div> */}
                        <div className="contact-item">
                            <label htmlFor="card" className='phone-label'>CARD</label>
                            <input
                                className={classNames("input-box", { inputError: errors.phone })}
                                maxlength="19"
                                placeholder="_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _ "
                                type="tel"
                                inputMode="numeric"
                                autoComplete="cc-number"
                                name="card"
                                id='card'
                                onChange={(event, values) => {
                                    handleChange(event)
                                    const { value } = event.target
                                    event.target.value = cardNumber(value)
                                    values.card = limitStr(event.target.value, 19)
                                    //  values.card.length = 19
                                    // values.card = "values.card.substr(0,17)"
                                    // values.card = cardNumber(value)


                                }}
                                // values = {limitStr(event.target.value, 19)}
                                // values = {limitStr(values.card, 19)}
                                ref={register()}
                                onBlur={(e) => {
                                    handleBlur(e);
                                    setInputOnFocus(true)
                                }
                                }
                            />
                            {errors.card && touched.card && errors.card}
                        </div>
                        <div className="contact-item">
                            <div className="adress-details-box">
                                <div className="adress-details-house">
                                    <input
                                        type="text"
                                        name="cardDate"
                                       
                                        inputMode="numeric"
                                        className={classNames("input-box", { inputError: errors.street })}
                                        placeholder="MM/YY"
                                        ref={register()}
                                        onChange={(event, values) => {
                                            handleChange(event)
                                            const { value } = event.target
                                            event.target.value = cardDate(value)                                                 
        
                                        }}
                                        onBlur={handleBlur}
                                        value={values.cardDate}
                                    />
                                    {inputOnFocus && values.card.length > 19 && errors.card}
                                    {errors.cardDate && touched.cardDate && errors.cardDate}
                                    {console.log("errors.house", values.house)}
                                    {console.log("errors.house && touched.house && errors.house", errors.house && touched.house && errors.house)}
                                </div>
                                <div className="cvv-block">
                                    <input
                                        type={inputType ? "text" : "password"}
                                        name="cardCVV"
                                        id="cvv"
                                        className='input-box'
                                        placeholder="CVV"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardCVV}
                                    />
                                    <div className='eye-icon' onClick={() => setInputType(!inputType)}>
                                        {inputType ? <img src={eye} alt="eye-icon" /> : <img src={eyeOpen} alt="eye-icon" />}
                                    </div>
                                    {errors.cardCVV && touched.cardCVV && errors.cardCVV}
                                </div>
                            </div>
                        </div>
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {props.totalPrice}</span>
                        </div>
                        <div className="cart-btns">
                            <button className="empty-cart-btn" type="submit" onClick={(errors) => {
                                if (!values.card || !values.cardDate || !values.cardCVV) {
                                    console.log("необходимо заполнтиь все поля")
                                    return errors
                                } else {
                                    dispatch({ type: "OPEN_COMPLETION_ITEM" })

                                }
                            }}>Check out</button>
                            <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_DELIVERY_ITEM" }) }}>View Cart</button>
                        </div>
                        {console.log("valuesvaluesvalues", values)}
                        {console.log("values.card.length", values.card.length)}
                    </form>
                )
                }
            </Formik>
        </div>
    )
}



