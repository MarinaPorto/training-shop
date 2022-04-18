
import './express-delivery-cart.css';
import { Formik, Field } from 'formik';
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MaskedInput from "@biproxi/react-text-mask";

export const ExpressDeliveryInfoCart = (props) => {
    let downloadedData = useSelector(state => state.cartItems.data);

    let initialValues = downloadedData === [] ? {
        deliveryMethod: "Express delivery",
        phone: "",
        email: "",
        country: 'Belarus',
        city: '',
        street: '',
        house: '',
        apartment: '',
        confirmation: false,
        postcode: '',
        storeAddress: ''


    } : {
        deliveryMethod: "Express delivery",
        phone: downloadedData.phone,
        email: downloadedData.email,
        country: 'Belarus',
        city: downloadedData.city,
        street: downloadedData.street,
        house: downloadedData.house,
        apartment: downloadedData.apartment,
        confirmation: false,
        postcode: downloadedData.postcode,
        storeAddress: ''

    }


    const phoneNumberMask = [

        "+",
        "3",
        "7",
        "5",
        " ",
        "(",
        /\d/,
        /\d/,
        // /[2,3,4]/,
        // /[3,4,5,9]/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];

    const dispatch = useDispatch();
    let totalPriceCart = useSelector(state => state.cartItems.totalPrice);



    return (

        <div className='delivery-info-inner-block'>
            <Formik
                initialValues={initialValues}
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
                        !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm.test(values.phone.replace(/[^\d]/g, ''))
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
                    isValid
                }) => (
                    <form onSubmit={handleSubmit}>

                        <div className="contact-item">
                            <label htmlFor="phone" className='phone-label'>PHONE</label>

                            <Field
                                name="phone"
                                render={({ field }) => (
                                    <MaskedInput
                                        {...field}
                                        mask={phoneNumberMask}
                                        className={classNames("input-box", { inputError: errors.phone && touched.phone && errors.phone })}
                                        id="phone"
                                        placeholder="+375 (_ _)_ _ _ _ _ _ _ "
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                )}
                            />
                            {errors.phone && touched.phone && errors.phone}
                        </div>
                        <div className="contact-item">

                            <label htmlFor="email" className='email-label'>E-MAIL</label>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                className={classNames("input-box", { inputError: errors.email && touched.email && errors.email })}
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
                                    placeholder='Country'
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
                                    className={classNames("input-box", { inputError: errors.city && touched.city && errors.city })}
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
                                    className={classNames("input-box", { inputError: errors.street && touched.street && errors.street })}
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
                                            className={classNames("input-box", { inputError: errors.house && touched.house && errors.house })}
                                            placeholder="House"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.house}
                                        />
                                        {errors.house && touched.house && errors.house}                                        
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
                        </div>
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {totalPriceCart}</span>
                        </div>
                        <div className="cart-btns">
                            <button className="empty-cart-btn" type="submit" onClick={(errors) => {
                                if (!values.email || !values.phone || !values.city || !values.street || !values.house || !values.confirmation) {
                                    values.confirmation = false
                                } else {
                                    dispatch({ type: "OPEN_PAYMENT_ITEM", values })
                                }
                            }}>Further</button>
                            <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_CART_ITEM" }) }}>View Cart</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}



