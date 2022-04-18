
import './delivery-cart.css';
import { Formik } from 'formik';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ExpressDeliveryInfoCart } from '../express-delivery-cart';
import { StorePickupCart } from '../store-pickup-cart';
import { PostOfficeDeliveryCart } from '../post-office-delivery-cart';
import { PaymentCart } from '../payment-cart/payment-cart';


export const DeliveryInfoCart = (props) => {
    console.log("DeliveryInfoCartDeliveryInfoCart stooooooooooooooooooore", props)

    const listCountries = useSelector(state => state.getCountries.listCountries);
    console.log("listCountries stooooooooooooooooooore", listCountries)
    let isDeliveryMenu = useSelector(state => state.cartItems.isDeliveryMenu);
    let isPaymentMenu = useSelector(state => state.cartItems.isPaymentMenu);
    let isCartMenu = useSelector(state => state.cartItems.isCartMenu);

    const dispatch = useDispatch();
    let [isNextItem, setIsNextItem] = useState(false);


    function getCountriesList(values) {
        if (listCountries.length === 0) {
            dispatch({ type: "GET_COUNTRIES", payload: values })
            console.log("данных нет отправляю запрос", listCountries)

        } else {
            console.log("данные есть запрос не нужен", listCountries)

        }

    }

    // let totalPrice = props.totalPrice;
    let [isPostOfficeDeliveryItem, setIsPostOfficeDeliveryItem] = useState(true);
    let [isExpressDeliveryItem, setIsExpressDeliveryItem] = useState(false);
    let [isStoreDeliveryItem, setIsStoreDeliveryItem] = useState(false);

    function showPostOfficeDeliveryItem() {
        setIsPostOfficeDeliveryItem(true);
        setIsExpressDeliveryItem(false);
        setIsStoreDeliveryItem(false)
    }

    function showExpressDeliveryItem() {
        setIsPostOfficeDeliveryItem(false);
        setIsExpressDeliveryItem(true);
        setIsStoreDeliveryItem(false)
    }

    function showStoreDeliveryItem() {
        setIsPostOfficeDeliveryItem(false);
        setIsExpressDeliveryItem(false);
        setIsStoreDeliveryItem(true)

    }

    console.log("получение списка стран")


    return (
        // <div className={classNames("cart-full-inner delivery-info-inner", { cartItemsHidden: isNextItem })}>
        <div className='cart-full-inner delivery-info-inner'>
            <div className="cart-full-inner delivery-info-inner">
                {/* <div className={classNames("cart-full-content", { cartItemsHidden: isNextItem })}></div> */}
                {console.log("isNextItem", isNextItem)}

                {/* <div className="cart-full-content"> */}
                <div className="cart-full-content">
                    <div className="cart__bread-crumbs">
                        <ul className='cart__bread-crumbs-list'>

                            <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isCartMenu })}>Item in Cart <span className="cart-crumbs-separator">/</span></li>
                            <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isDeliveryMenu })}>Delivery Info <span className="cart-crumbs-separator">/</span></li>
                            <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isPaymentMenu })}>Payment</li>
                        </ul>
                    </div>

                    <div className="delivery-info-box">
                        <p className='delivery-info-title'>Choose the method of delivery of the items</p>
                        <Formik
                            initialValues={{ deliveryMethod: "pickup from post offices" }}

                            onSubmit={(values, errors) => {
                                console.log("выбран input")
                                console.log("deliveryMethod", values.deliveryMethod)

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
                                            {console.log("values.deliveryMethod1 вначале", values.deliveryMethod)}
                                            <input type="radio" id="methodDelivery1" className='methodDelivery-radio'
                                                name="deliveryMethod" value="pickup from post offices"

                                                onClick={() => { values.deliveryMethod = "pickup from post offices"; showPostOfficeDeliveryItem(); console.log("values.deliveryMethod111111111111", values.deliveryMethod, values) }}
                                                onChange={handleChange}
                                                checked={values.deliveryMethod === 'pickup from post offices' ? true : false}
                                            />
                                            <label htmlFor="methodDelivery1">Pickup from post offices</label>
                                        </p>

                                        <p>
                                            <input type="radio" id="methodDelivery2" className='methodDelivery-radio'
                                                name="deliveryMethod" value="express delivery"
                                                // onChange={handleChange}
                                                onClick={() => { values.deliveryMethod = "express delivery"; showExpressDeliveryItem(); console.log("values.deliveryMethod2222", values.deliveryMethod, values) }}
                                            />
                                            <label htmlFor="methodDelivery2">Express delivery</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="methodDelivery3" className='methodDelivery-radio'
                                                name="deliveryMethod" value="store pickup" onChange={handleChange} onClick={() => {
                                                    values.deliveryMethod = "store pickup"; showStoreDeliveryItem(); getCountriesList(values);
                                                    // dispatch({ type: "GET_COUNTRIES", payload: values }); console.log("values.deliveryMethod333", values.deliveryMethod, values)
                                                }} />
                                            <label htmlFor="methodDelivery3">Store pickup</label>
                                        </p>
                                    </div>


                                </form>

                            )}
                        </Formik>
                        {console.log("isNextItem", props.isNextItem)}

                        {/* <PaymentCart totalPrice={props.totalPrice}/> */}
                        {isPostOfficeDeliveryItem ? <PostOfficeDeliveryCart totalPrice={props.totalPrice} closeCart={props.closeCart} isExpressDeliveryItem={isExpressDeliveryItem} setIsExpressDeliveryItem={setIsExpressDeliveryItem} isStoreDeliveryItem={isStoreDeliveryItem} setIsStoreDeliveryItem={setIsStoreDeliveryItem} isPostOfficeDeliveryItem={isPostOfficeDeliveryItem} setIsPostOfficeDeliveryItem={setIsPostOfficeDeliveryItem} setIsNextItem={setIsNextItem} isNextItem={isNextItem} /> : ""}
                        {isExpressDeliveryItem ? <ExpressDeliveryInfoCart totalPrice={props.totalPrice} closeCart={props.closeCart} isExpressDeliveryItem={isExpressDeliveryItem} setIsExpressDeliveryItem={setIsExpressDeliveryItem} isStoreDeliveryItem={isStoreDeliveryItem} setIsStoreDeliveryItem={setIsStoreDeliveryItem} isPostOfficeDeliveryItem={isPostOfficeDeliveryItem} setIsPostOfficeDeliveryItem={setIsPostOfficeDeliveryItem} /> : ""}
                        {isStoreDeliveryItem ? <StorePickupCart totalPrice={props.totalPrice} closeCart={props.closeCart} isExpressDeliveryItem={isExpressDeliveryItem} setIsExpressDeliveryItem={setIsExpressDeliveryItem} isStoreDeliveryItem={isStoreDeliveryItem} setIsStoreDeliveryItem={setIsStoreDeliveryItem} isPostOfficeDeliveryItem={isPostOfficeDeliveryItem} setIsPostOfficeDeliveryItem={setIsPostOfficeDeliveryItem} /> : ""}

                    </div>
                </div>
            </div>
        </div >
    )
}



