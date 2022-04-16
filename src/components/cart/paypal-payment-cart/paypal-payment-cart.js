import './paypal-payment-cart.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import classNames from "classnames";
import { useSelector } from "react-redux";






export const PaypalPaymentItem = (props) => {

    let [inputOnFocus, setInputOnFocus] = useState(false);
    const dispatch = useDispatch();


    let totalPrice = props.totalPrice;
    let orderedProducts = useSelector(state => state.cart.itemsInCart);
    (console.log("orderedProductsData", orderedProducts))

    let deliveryData = useSelector(state => state.cartItems.data);
    (console.log("deliveryData", deliveryData))

    let orderedProductsData = orderedProducts.map(element => {
        return {
            "name": element.name,
            "size": element.size,
            "color": element.color,
            "quantity": element.count
        }
    });
    console.log(orderedProductsData)

    let orderInformation =

    {
        "products": orderedProductsData,
        "deliveryMethod": deliveryData.deliveryMethod,
        "paymentMethod": "PayPal",
        "totalPrice": totalPrice,
        "phone": deliveryData.phone,
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


    console.log(orderInformation)
    return (
        <div className='delivery-info-inner'>
            <Formik
                initialValues={{
                    paymentMethod: "Paypal",
                    cashEmail: "",
                    card: "",
                    cardDate: "",
                    cardCVV: ""
                }}
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
                                value={values.email}
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
                                    dispatch({ type: "OPEN_COMPLETION_ITEM" })
                                    dispatch({ type: "POST_ORDER", orderInformation })
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



