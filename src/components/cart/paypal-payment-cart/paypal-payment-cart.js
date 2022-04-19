import './paypal-payment-cart.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import classNames from "classnames";
import { useSelector } from "react-redux";

export const PaypalPaymentItem = (props) => {

    // const fetchDataPosts = async (values) => {
    //     dispatch({ type: "OPEN_COMPLETION_ITEM", values })

    // };

    let [inputOnFocus, setInputOnFocus] = useState(false);
    const dispatch = useDispatch();


    let totalPrice = props.totalPrice;
    let orderedProducts = useSelector(state => state.cart.itemsInCart);
    let deliveryData = useSelector(state => state.cartItems.data);
    let paymentdData = useSelector(state => state.cartItems.paymentData);
    let orderedProductsData = orderedProducts.map(element => {
        return {
            "name": element.name,
            "size": element.size,
            "color": element.color,
            "quantity": element.count
        }
    });

    let orderInformation =

    {
        "products": orderedProductsData,
        "deliveryMethod": deliveryData.deliveryMethod,
        "paymentMethod": "PayPal",
        "totalPrice": totalPrice,
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
    // let num = [];

    let initialValues = paymentdData === [] ? {
        paymentMethod: "Paypal",
        card: '',
        cardDate: '',
        cardCVV: '',
        cashEmail: ''
    } : {
        paymentMethod: "Paypal",
        card: "",
        cardDate: "",
        cardCVV: "",
        cashEmail: paymentdData.cashEmail
    }

    return (
        <div className='delivery-info-inner'>
            <Formik
            initialValues={initialValues}
                // initialValues={{
                //     paymentMethod: "Paypal",
                //     cashEmail: "",
                //     card: "",
                //     cardDate: "",
                //     cardCVV: ""
                // }}
                validate={(values) => {
                    const errors = {};
                    if (!values.cashEmail) {
                        errors.cashEmail = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.cashEmail)
                    ) {
                        errors.cashEmailNotFocus = <p className="required-field required-field-error">Неправильно введен email</p>;
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
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="contact-item">
                            <label htmlFor="cashEmail" className='email-label'>E-MAIL</label>
                            <input
                                type="email"
                                name="cashEmail"
                                id='cashEmail'
                                className={classNames("input-box", { inputError: errors.email })}
                                placeholder="e-mail"
                                onChange={handleChange}
                                onBlur={(e) => {
                                    handleBlur(e);
                                    setInputOnFocus(true)
                                }}
                                value={values.cashEmail}
                            />
                            {errors.cashEmail && touched.cashEmail && errors.cashEmail}
                            {inputOnFocus && errors.cashEmailNotFocus}
                        </div>
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {totalPrice}</span>
                        </div>
                        <div className="cart-btns">
                            <button className="empty-cart-btn" type="submit" onClick={(errors) => {
                                if (!values.cashEmail) {
                                    console.log("необходимо заполнтиь все поля")
                                    return errors
                                } else {
                                    orderInformation.cashEmail = values.cashEmail;
                                    // dispatch({ type: "POST_ORDER", num })
                                    dispatch({ type: "POST_ORDER", orderInformation })
                                    // fetchDataPosts()
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



