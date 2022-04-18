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
        country: 'Belarus',
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
        country: 'Belarus',
        city: downloadedData.city,
        street: downloadedData.street,
        house: downloadedData.house,
        apartment: downloadedData.apartment,
        confirmation: false,
        postcode: downloadedData.postcode,
        storeAddress: ''

    }


    // let isPayment = useSelector(state => state.cartItems.isPayment);
    // let [removeСonfirmation, setRemoveСonfirmation] = useState(false)
    // (console.log(removeСonfirmation))

    const dispatch = useDispatch();

    // const postCodePattern = (value) => {
    //     console.log("savepostCodePattern", value)
    //     let result = value.replace(/^\d/g, "").match(/\d{1,6}/g) || ""
    //     console.log("saveresult", result)
    //     return result
    // }

    // function phoneNumberFormat(value) {
    //     if (!value) return value;
    //     console.log("return", value)
    //     // const phoneNumber = value.replace(/\+375/, '').replace(/[^\d]/g,'');
    //     const phoneNumber = value.replace(/\+375/, '').replace(/[^\d]/g, '');
    //     console.log("return phoneNumber", phoneNumber)
    //     if (phoneNumber.length < 3) {
    //         console.log("return 1", `+375 (${phoneNumber})`)
    //         return `+375 ${phoneNumber}`;
    //     }
    //     // if (phoneNumber.length < 3) {
    //     //     console.log("return 1", `+375 (${phoneNumber})`)
    //     //     return `+375 (${phoneNumber})`;
    //     // }
    //     console.log("return 2", `+375 (${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 9)}`)
    //     return `+375 (${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 9)}`;
    // }


    return (

        <div className='delivery-info-inner-block'>
            {/* <div className={classNames("cart-items", { cartItemsScroll: isNeedScroll })}> */}
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
                    if (!values.postcode) {
                        errors.postcode = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
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
                            <Field
                                name="phone"
                                render={({ field }) => (
                                    <MaskedInput
                                        {...field}
                                        mask={phoneNumberMask}
                                        className={classNames("input-box", { inputError: errors.phone })}
                                        id="phone"
                                        placeholder="+375 (_ _)_ _ _ _ _ _ _ "
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    // className={
                                    //     errors.phone && touched.phone
                                    //         ? "text-input error"
                                    //         : "text-input"
                                    // }
                                    />
                                )}


                            // //  mask={phoneNumberMask}
                            // className={classNames("input-box", { inputError: errors.phone })}
                            // placeholder="+375 (_ _)_ _ _ _ _ _ _ "
                            // // className='input-box'
                            // type="tel"
                            // inputMode="numeric"

                            // // pattern="^\+375(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$"

                            // id='phone'
                            // value={values.phone}
                            // // onInput={event => values.phone = event.target.value}
                            // onChange={(event, values) => {
                            //     handleChange(event)
                            //     const { value } = event.target
                            //     // event.target.value = PhoneNumber(value)
                            //     event.target.value = phoneNumberFormat(value)

                            //     // values.phone = event.target.value

                            // }}
                            // ref={register("phone")}
                            // onBlur={handleBlur}



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
                                    className={classNames("input-box", { inputError: errors.postcode })}
                                    placeholder="BY _ _ _ _ _ _"
                                    onChange={(event, values) => {
                                        console.log("saveevent", event)
                                        handleChange(event)
                                        // const { value } = event.target
                                        // console.log("savevalue", value)
                                        // event.target.value = postCodePattern(value)

                                    }}
                                    onBlur={handleBlur}
                                    // ref={register("postcode")}
                                    //  value={downloadedData === [] ? "" : values.postcode}
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
                            <button className="empty-cart-btn" type="submit" onClick={() => {
                                if (!values.email || !values.phone || !values.city || !values.street || !values.house || !values.postcode || !values.confirmation) {
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



