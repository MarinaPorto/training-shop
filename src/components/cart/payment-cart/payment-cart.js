
import './payment-cart.css';
import { Formik } from 'formik';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ExpressDeliveryInfoCart } from '../express-delivery-cart';
import { StorePickupCart } from '../store-pickup-cart';
import { CardPaymentItem } from '../card-payment-cart';
import { PaypalPaymentItem } from '../paypal-payment-cart';
import { CashPaymentItem } from '../cash-payment-cart';
import PayPal from "../img/paypal.svg";
import Visa from "../img/visa.svg";
import MasterCard from "../img/mastercard.svg"


export const PaymentCart = (props) => {
    console.log("props PaymentCart", props)

    let isDeliveryMenu = useSelector(state => state.cartItems.isDeliveryMenu);
    let isPaymentMenu = useSelector(state => state.cartItems.isPaymentMenu);
    let isCartMenu = useSelector(state => state.cartItems.isCartMenu);
    let totalPriceCart = useSelector(state => state.cartItems.totalPrice);




    let [isPayPalPaymentItem, setIsPayPalPaymentItem] = useState(false);
    let [isCardPaymentItem, setIsCardPaymentItem] = useState(true);
    let [isCashPaymentItem, setIsCashPaymentItem] = useState(false);


    function showPayPalPaymentItem(values) {
        setIsPayPalPaymentItem(true);
        setIsCardPaymentItem(false);
        setIsCashPaymentItem(false);
        values.card = ""
    }

    function showCardVisaPaymentItem(values) {
        setIsPayPalPaymentItem(false);
        setIsCardPaymentItem(true);
        setIsCashPaymentItem(false)
        values.card = "visa"

    }

    function showCardPaymentItem(values) {
        setIsPayPalPaymentItem(false);
        setIsCardPaymentItem(true);
        setIsCashPaymentItem(false)
        values.card = ""

    }

    function showCashPaymentItem(values) {
        setIsPayPalPaymentItem(false);
        setIsCardPaymentItem(false);
        setIsCashPaymentItem(true);
        values.card = ""

    }



    return (
        <div className="cart-full-inner delivery-info-inner">
            <div className="cart-full-content">
                <div className="cart-full-content">
                    <div className="cart__bread-crumbs">
                        <ul className='cart__bread-crumbs-list'>

                            <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isCartMenu })}>Item in Cart <span className="cart-crumbs-separator">/</span></li>
                            <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isDeliveryMenu })}>Delivery Info <span className="cart-crumbs-separator">/</span></li>
                            <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isPaymentMenu })}>Payment</li>
                        </ul>
                    </div>
                    <div className="delivery-info-box">
                        <p className='delivery-info-title'>Method of payments</p>
                        <Formik
                            initialValues={{
                                paymentMethod: "card",
                                card: "visa"

                            }}

                            onSubmit={(values, errors) => {

                                console.log("paymentMethod", values.paymentMethod)

                            }}
                        >
                            {({
                                values,
                                handleChange,
                                handleSubmit,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='methodDelivery-box'>
                                        <p>
                                            <input type="radio" id="paymentMethod1" className='methodDelivery-radio'
                                                name="paymentMethod" value="paypal"
                                                onClick={() => {
                                                    values.paymentMethod = "paypal";
                                                    showPayPalPaymentItem(values);
                                                    console.log("values.deliveryMethod111111111111", values.paymentMethod, values)
                                                }}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="paymentMethod1"><img src={PayPal} alt="PayPal" className='payment-icon' /></label>
                                        </p>
                                        <p>
                                            <input type="radio" id="paymentMethod2" className='methodDelivery-radio'
                                                name="paymentMethod" value="card"
                                                onChange={handleChange}
                                                onClick={() => {
                                                    values.paymentMethod = "card";
                                                    showCardVisaPaymentItem(values);
                                                    console.log("values.deliveryMethod2222", values.paymentMethod, values)
                                                }}
                                                checked={values.card === 'visa' ? true : false}
                                            />
                                            <label htmlFor="paymentMethod2"><img src={Visa} alt="Visa" className='payment-icon' /></label>
                                        </p>
                                        <p>
                                            <input type="radio" id="paymentMethod3" className='methodDelivery-radio'
                                                name="paymentMethod" value="card"
                                                onChange={handleChange} onClick={() => {
                                                    values.paymentMethod = "card";
                                                    showCardPaymentItem(values);
                                                    console.log("values.deliveryMethod111111111111", values.paymentMethod, values)

                                                }} />
                                            <label htmlFor="paymentMethod3"><img src={MasterCard} alt="MasterCard" className='payment-icon' /></label>
                                        </p>
                                        <p>
                                            <input type="radio" id="paymentMethod4" className='methodDelivery-radio'
                                                name="paymentMethod" value="cash"
                                                onChange={handleChange} onClick={() => {
                                                    values.paymentMethod = "cash";
                                                    showCashPaymentItem(values);
                                                    console.log("values.deliveryMethod111111111111", values.paymentMethod, values)

                                                }} />
                                            <label htmlFor="paymentMethod4">Cash</label>
                                        </p>
                                    </div>


                                </form>

                            )}
                        </Formik>
                        {isCardPaymentItem ? <CardPaymentItem totalPrice={totalPriceCart} /> : ""}
                        {isPayPalPaymentItem ? <PaypalPaymentItem totalPrice={totalPriceCart} /> : ""}
                        {isCashPaymentItem ? <CashPaymentItem totalPrice={totalPriceCart} /> : ""}

                    </div>
                </div>
            </div>
        </div>
    )
}



