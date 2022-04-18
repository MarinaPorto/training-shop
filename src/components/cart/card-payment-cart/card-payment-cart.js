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

    let paymentdData = useSelector(state => state.cartItems.paymentData);
    let deliveryData = useSelector(state => state.cartItems.data);
    let orderedProducts = useSelector(state => state.cart.itemsInCart);
    let orderedProductsData = orderedProducts.map(element => {
        return {
            "name": element.name,
            "size": element.size,
            "color": element.color,
            "quantity": element.count
        }
    });

    let initialValues = paymentdData === [] ? {
        paymentMethod: "Сard",
        card: '',
        cardDate: '',
        cardCVV: '',
        cashEmail: ''
    } : {
        paymentMethod: "Сard",
        card: paymentdData.card,
        cardDate: paymentdData.cardDate,
        cardCVV: paymentdData.cardCVV,
        cashEmail: ""
    }

    let orderInformation =

    {
        "products": orderedProductsData,
        "deliveryMethod": deliveryData.deliveryMethod,
        "paymentMethod": "Card",
        "totalPrice": props.totalPrice,
        "phone": deliveryData.phone.replace(/[ ()]/g, ''),
        "email": deliveryData.email,
        "country": deliveryData.country,
        "cashEmail": "",
        "city": deliveryData.city,
        "street": deliveryData.street,
        "house": deliveryData.house,
        "apartment": deliveryData.apartment,
        "postcode": deliveryData.postcode,
        "storeAddress": deliveryData.storeAddress,
        "card": "",
        "cardDate": "",
        "cardCVV": ""
    }

    const { register } = useForm();
    // const { onChange, onBlur, name, ref } = register()
    // let cardDate = useRef();
    console.log("props CardPaymentItem", props)
    let [inputType, setInputType] = useState(false)
    let [inputOnFocus, setInputOnFocus] = useState(null)
    let [inputOnFocusCVV, setInputOnFocusCVV] = useState(null)
    let [correctDate, setcorrectDate] = useState(false)
    const dispatch = useDispatch();
    const cardNumber = (value) => {
        return value.replace(/\s/g, "").match(/\d{1,4}/g)?.join(" ") || ""

    }
    const cardDatePattern = (value) => {
        return value.replace(/\s/g, "").match(/\d{1,2}/g)?.join("/") || ""
        // return value.replace(/\s/g, "").match(/(0[1-9]|1[012])[- /.](2|3)\d/)?.join("/").substring(0, 5);
    }

    const cardCVV = (value) => {
        console.log("cardDatePattern", value)
        return value.replace(/\s/g, "").match(/\d{1,3}/g) || ""
        // return value.replace(/\s/g, "").match(/(0[1-9]|1[012])[- /.](2|3)\d/)?.join("/").substring(0, 5);
    }


    // function changeViewCVV(values) {
    //     console.log("changeViewCVV", values)
    //     values.cardCVV = values.cardCVV.replace(/\d/g, '*');

    // }

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let numberOfCurrentYear = currentYear.toString().slice(-2);

    function checkCardDateAndCurrentDate(values) {
        let partsOfDate = values.cardDate.split("/");
        if (+partsOfDate[1] < +numberOfCurrentYear && +partsOfDate[0] < +currentMonth) {
            setcorrectDate(true)
        } else {
            setcorrectDate(false)
        }
    }


    return (
        <div className='delivery-info-inner'>
            <Formik
                initialValues={initialValues}

                validate={(values) => {
                    const errors = {};
                    if (!values.card) {
                        errors.card = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (

                        !/\d{16}/gm.test(values.card.replace(/\s+/g, ''))
                    ) {
                        errors.card = <p className="required-field required-field-error">Неправильно введен номер карты</p>;
                    }
                    if (!values.cardDate) {
                        errors.cardDate = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (
                        !/^(0\d|1[0-2])\/\d{2}$/gm.test(values.cardDate)
                    ) {
                        errors.cardDate = <p className="required-field required-field-error">Неправильно введена дата</p>;
                    }
                    else if (
                        correctDate
                    ) {
                        errors.cardDate = <p className="required-field required-field-error">Неправильно введена дата действия карты</p>;
                    }
                    if (!values.cardCVV) {
                        errors.cardCVV = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    else if (
                        values.cardCVV.length < 3 && !/\d{3}/gm.test(values.cardCVV)
                    ) {
                        errors.cardCVVLength = <p className="required-field required-field-error">Неправильно введен CVV</p>;
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

                    <form onSubmit={handleSubmit} >
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
                                }}
                                ref={register("card")}
                                onBlur={(e) => {
                                    handleBlur(e);
                                    setInputOnFocus(true)
                                }
                                }
                            />
                            {inputOnFocus && errors.card && touched.card && errors.card}
                        </div>
                        <div className="contact-item">
                            <div className="adress-details-box">
                                <div className="adress-details-house">
                                    <input
                                        type="tel"
                                        maxlength="5"
                                        name="cardDate"
                                        id='cardDate'
                                        inputMode="numeric"
                                        autoComplete="cc-number"
                                        className={classNames("input-box", { inputError: errors.street })}
                                        placeholder="MM/YY"
                                        onChange={(event, values) => {
                                            handleChange(event)
                                            const { value } = event.target
                                            event.target.value = cardDatePattern(value)

                                        }}
                                        onBlur={(e) => {
                                            console.log("flost focus")
                                            handleBlur(e);
                                            setInputOnFocus(true)
                                        }
                                        }
                                        onFocus={(e) => {
                                            setInputOnFocus(false)
                                            console.log("focus")
                                        }
                                        }
                                        ref={register("cardDate ")}
                                        onClick={() => console.log("input click")}
                                    />
                                    {inputOnFocus && errors.cardDate && errors.cardDate && errors.cardDate}
                                </div>
                                <div className="cvv-block">
                                    <input
                                        type={inputType ? "text" : "password"}
                                        name="cardCVV"
                                        maxlength="3"
                                        id="cvv"
                                        inputMode="numeric"
                                        autoComplete="cc-number"
                                        className='input-box'
                                        placeholder="CVV"
                                        onChange={(event, values) => {
                                            handleChange(event)
                                            const { value } = event.target
                                            event.target.value = cardCVV(value)
                                        }}
                                        onBlur={(e) => {
                                            console.log("flost focus")
                                            handleBlur(e);
                                            setInputOnFocusCVV(true)
                                        }
                                        }
                                        onFocus={(e) => {
                                            setInputOnFocusCVV(false)
                                            console.log("focus")
                                        }
                                        }
                                        ref={register("cardCVV")}
                                    />
                                    <div className='eye-icon' onClick={() => setInputType(!inputType)}>
                                        {/* <img src={eye} alt="eye-icon" />  */}
                                        {inputType ? <img src={eye} alt="eye-icon" /> : <img src={eyeOpen} alt="eye-icon" />}
                                    </div>
                                    {errors.cardCVV && touched.cardCVV && errors.cardCVV}
                                    {inputOnFocusCVV && errors.cardCVVLength && errors.cardCVVLength}
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
                                    checkCardDateAndCurrentDate(values)
                                    return errors
                                } else {
                                    orderInformation.card = values.card;
                                    orderInformation.cardDate = values.cardDate;
                                    orderInformation.cardCVV = values.cardCVV;
                                    dispatch({ type: "POST_ORDER", orderInformation })
                                    dispatch({ type: "OPEN_COMPLETION_ITEM", values })
                                }
                            }}>Check out</button>
                            <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_DELIVERY_ITEM" }) }}>View Cart</button>
                        </div>
                    </form>
                )
                }
            </Formik>
        </div>
    )
}



