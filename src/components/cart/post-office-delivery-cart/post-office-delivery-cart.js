import './post-office-delivery-cart.css';
import { Formik, Field } from 'formik';
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MaskedInput from "@biproxi/react-text-mask";


export const PostOfficeDeliveryCart = (props) => {

    let downloadedData = useSelector(state => state.cartItems.data);


    const phoneNumberMask = [
        "+",
        "3",
        "7",
        "5",
        " ",
        "(",
        /\d/,
        /\d/,
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


    let totalPriceCart = useSelector(state => state.cartItems.totalPrice);


    let initialValues = downloadedData === [] ? {
        deliveryMethod: "Pickup from post offices",
        phone: "",
        email: "",
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        confirmation: false,
        postcode: '',
        storeAddress: ''
    } : {
        deliveryMethod: "Pickup from post offices",
        phone: downloadedData.phone,
        email: downloadedData.email,
        country: downloadedData.email,
        city: downloadedData.city,
        street: downloadedData.street,
        house: downloadedData.house,
        apartment: downloadedData.apartment,
        confirmation: false,
        postcode: downloadedData.postcode,
        storeAddress: ''

    }

    const dispatch = useDispatch();

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
                    if (!values.country) {
                        errors.country = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
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
                    else if (values.postcode.length < 6) {
                        errors.postcode = <p className="required-field required-field-error">Неправильно введен индекс</p>;
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
                    resetForm

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
                                        onBlur={(e) => {
                                            console.log("flost focus")
                                            handleBlur(e);
                                        }
                                        }
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
                                    className={classNames("input-box", { inputError: errors.country && touched.country && errors.country })}
                                    type="text"
                                    name="country"
                                    placeholder='Country'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.country}
                                />
                                {errors.country && touched.country && errors.country}
                            </div>

                            <div className="contact-item">
                                <input
                                    type="text"
                                    name="city"

                                    className={classNames("input-box", { inputError: errors.city && touched.city })}
                                    placeholder="City"
                                    onChange={handleChange}
                                    onBlur={(e) => {
                                        handleBlur(e);
                                    }
                                    }

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
                                        value={values.apartment}
                                    />
                                </div>
                            </div>
                            <div className="contact-item">
                                <label htmlFor="postcode" className='phone-label'>POSTCODE</label>
                                <input
                                    type="tel"
                                    pattern='^[ 0-9]+$'
                                    maxlength="6"
                                    name="postcode"
                                    id="postcode"
                                    className={classNames("input-box", { inputError: errors.postcode && touched.postcode && errors.postcode })}
                                    placeholder="BY _ _ _ _ _ _"
                                    onChange={(event, values) => {
                                        handleChange(event)
                                    }}
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
                        </div>
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {totalPriceCart}</span>
                        </div>
                        <div className="cart-btns">
                            {console.log("values.city", values.city)}
                            <button className="empty-cart-btn" type="submit" onClick={() => {
                                if (!values.email || !values.phone || !values.country || !values.city || !values.street || !values.house || !values.postcode || values.postcode.length < 6 || !values.confirmation) {
                                    values.confirmation = false
                                } else {
                                    props.setIsNextItem(true)
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



