
import './post-office-delivery-cart.css';
import { Formik } from 'formik';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { ExpressDeliveryInfoCart } from '../express-delivery-cart';
import { StorePickupCart } from '../store-pickup-cart';
import { PaymentCart } from '../payment-cart';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


let data = [
    {
        _id: 'gj8a3jg8aJga3gajka3gag',
        name: "Беларусь"
    },
    {
        _id: 'gj8a3jg8aJga3gajka3gag',
        name: "Poland"
    }
]

export const PostOfficeDeliveryCart = (props) => {
    const { register, handleSubmit } = useForm();

    let totalPrice = props.totalPrice;
    let isPayment = useSelector(state => state.cartItems.isPayment);

    // let itemsCart = props.cartItems;
    // let totalPrice = props.cartItems.reduce((total, product) => total += product.price, 0);
    // let isNeedScroll = itemsCart.length > 4;
    //  const phoneNumberMask = /+375 (25|29|33|44)\d{7}/
    //  const phoneNumberMask = /^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
    //    const phoneNumberMask = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/d;
    //    const phoneNumberMask = /^[а-я]$/;
    // const phoneNumberMask = "+375(29|25|44|33)00-0000";
    const phoneNumberMask = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm
    console.log(phoneNumberMask)
    console.log(console.log(phoneNumberMask))
    let [removeСonfirmation, setRemoveСonfirmation] = useState(false)
    let [isPaymentItem, setIsPaymentItem] = useState(false)
    const dispatch = useDispatch();
    let totalPriceCart = useSelector(state => state.cartItems.totalPrice);
    const PhoneNumber = (value) => {
        return value.replace(/\s/g, "").match(/^[+]375 [(][0-9]{2}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$/).substr(0, 19) || ""
        // return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
    }

    // const PhoneMask = "+{00}(0000)00-0000";
    // const EmailMask = /^\S*@?\S*$/;
    // const phoneEmailMask = [
    //     {
    //         mask: PhoneMask,
    //     },
    //     {
    //         mask: EmailMask,
    //     },
    // ];
    // const phoneNumberMask =  "+{00}(0000)00-0000"
    //     const EmailMask = /^\S*@?\S*$/;



    //Сделать отдельным компонентом !!!!!!!!!!!!!!!!!!!

    return (

        <div className='delivery-info-inner-block'>
            {/* <div className={classNames("cart-items", { cartItemsScroll: isNeedScroll })}> */}
            <Formik
                initialValues={{
                    deliveryMethod: "Pickup from post offices",
                    phone: '',
                    email: '',
                    country: 'Belarus',
                    city: '',
                    street: '',
                    house: '',
                    apartment: '',
                    confirmation: false,
                    postcode: ''

                }}

                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = <p className="required-field required-field-error">Неправильно введен email</p>;
                    }
                    if (!values.phone) {
                        errors.phone = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    } else if (
                        !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm.test(values.phone)
                    ) {
                        errors.phone = <p className="required-field required-field-error">Неправильно введен номер телефона</p>;
                    }
                    if (!values.city) {
                        errors.city = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    if (!values.street) {
                        errors.street = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    if (!values.house) {
                        errors.house = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    if (values.confirmation === false) {
                        errors.confirmation = <p className="required-field required-field-error">Вы должны согласиться на обработку личной информации</p>;
                    }
                    if (!values.postcode) {
                        errors.postcode = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    return errors;
                }}
                onSubmit={(values, errors) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     // setSubmitting(false);
                    // }, 400);
                    let selectedKeys = Object.keys(errors)
                    console.log("selectedKeys", selectedKeys)
                    console.log("values", values)

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
                    resetForm

                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>

                        {/* <div className="contact-item">
                            <label htmlFor="phone" className='phone-label'>PHONE</label>
                            <IMaskInput
                                // mask={phoneNumberMask}
                                className={classNames("input-box", { inputError: errors.phone })}
                                placeholder="+375 (_ _)_ _ _ _ _ _ _"
                                // className='input-box'
                                type="text"
                                name="phone"
                                id='phone'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {errors.phone && touched.phone && errors.phone}
                        </div> */}


                        <div className="contact-item">
                            <label htmlFor="phone" className='phone-label'>PHONE</label>
                            <input
                                // mask={phoneNumberMask}
                                className={classNames("input-box", { inputError: errors.phone })}
                                placeholder="+375 (_ _)_ _ _ _ _ _ _ "
                                // className='input-box'
                                type="tel"
                                inputMode="numeric"
                               
                                name="phone"
                                id='phone'
                                onChange={(event, values) => {
                                    handleChange(event)
                                    const { value } = event.target
                                     event.target.value = PhoneNumber(value)
                                    values.phone = event.target.value

                                }}
                                ref={register()}
                                onBlur={handleBlur}

                            />
                            {errors.phone && touched.phone && errors.phone}
                        </div>
                        <div className="contact-item">

                            <label htmlFor="email" className='email-label'>E-MAIL</label>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                className={classNames("input-box", { inputError: errors.email })}
                                placeholder="e-mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="contacts-box">
                            <p className="contacts-box-title">
                                ADRESS
                            </p>
                            <div className="contact-item">
                                <input
                                    type="text"
                                    name="country"

                                    className='input-box'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.country}
                                />
                            </div>
                            <div className="contact-item">
                                <input
                                    type="text"
                                    name="city"

                                    className={classNames("input-box", { inputError: errors.city })}
                                    placeholder="City"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                />
                                {errors.city && touched.city && errors.city}
                            </div>
                            <div className="contact-item">

                                <input
                                    type="text"
                                    name="street"
                                    className={classNames("input-box", { inputError: errors.street })}
                                    placeholder="Street"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.street}
                                />
                                {errors.street && touched.street && errors.street}
                            </div>
                            {/* <select name="country"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.country} >
                                        {data.map(item => (
                                            <option key={item._id} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select> */}
                            <div className="contact-item">
                                <div className="adress-details-box">
                                    <div className="adress-details-house">
                                        <input
                                            type="text"
                                            name="house"
                                            className={classNames("input-box", { inputError: errors.street })}
                                            placeholder="House"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.house}
                                        />
                                        {errors.house && touched.house && errors.house}
                                        {console.log("errors.house", values.house)}
                                        {console.log("errors.house && touched.house && errors.house", errors.house && touched.house && errors.house)}
                                    </div>

                                    <input
                                        type="text"
                                        name="apartment"
                                        className='input-box'
                                        placeholder="Apartment"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.aparment}
                                    />
                                </div>

                            </div>
                            <div className="contact-item">
                                <label htmlFor="postcode" className='phone-label'>POSTCODE</label>
                                <input
                                    type="number"
                                    name="postcode"
                                    id="postcode"
                                    className={classNames("input-box", { inputError: errors.postcode })}
                                    placeholder="BY _ _ _ _ _ _"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.postcode}
                                />
                                {errors.postcode && touched.postcode && errors.postcode}
                            </div>
                        </div>
                        <div className="confirmation-checkbox">


                            <input

                                type="checkbox"
                                name="confirmation"

                                className='input-checkbox'
                                id="confirmation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmation}
                                checked={values.confirmation !== false ? true : false}
                            />
                            <label htmlFor="confirmation" className="input-checkbox-label">
                                <span className={classNames({ inputErrorBorder: errors.confirmation && touched.confirmation && errors.confirmation, })}></span> I agree to the processing of my personal information</label>

                            {errors.confirmation && touched.confirmation && errors.confirmation}
                            {console.log("errors.confirmation", errors.confirmation)}
                            {console.log("values.confirmation", values.confirmation)}
                            {console.log("errors", Object.keys(errors))}


                        </div>
                        {/* <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                /> */}
                        {/* {errors.password && touched.password && errors.password} */}
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {totalPriceCart}</span>
                        </div>


                        <div className="cart-btns">
                            {/* Делать проверку на пустоту полей при нажатии на кнопку */}

                            <button className="empty-cart-btn" type="submit" onClick={() => {
                                if (!values.email || !values.phone || !values.city || !values.street || !values.house || !values.postcode || !values.confirmation) {

                                    values.confirmation = false
                                    setRemoveСonfirmation(true);
                                    console.log("there are errrrrrrrrrrrrrrrrrors", values.confirmation)
                                } else {
                                    console.log("errors notttttttttttttttttt", values.confirmation)
                                    // setIsPaymentItem(true);
                                    props.setIsNextItem(true)
                                    dispatch({ type: "OPEN_PAYMENT_ITEM", values })
                                    console.log("isPaymentisPaymentisPaymentisPayment", isPayment)

                                }

                            }}>Further</button>

                            {/* <button className="empty-cart-btn">Further</button> */}
                            <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_CART_ITEM" }) }}>View Cart</button>
                        </div>
                        {/* <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button> */}


                    </form>
                )}
            </Formik>
            {console.log("isNextItem", props.isNextItem)}


            {console.log("errors isPaymentisPaymentisPaymentisPayment", isPayment)}



        </div>


    )
}



