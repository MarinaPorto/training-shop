import './store-pickup-cart.css';
import { useState } from 'react';
// import Select from 'react-select';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Field, Formik } from 'formik';
import classNames from "classnames";
import MaskedInput from "@biproxi/react-text-mask";


export const StorePickupCart = (props) => {


    let [isOpenCitiesList, setIsOpenCitiesList] = useState(false);


    let downloadedData = useSelector(state => state.cartItems.data);
    console.log("downloadedData", downloadedData)

    let initialValues = downloadedData === [] ? {
        deliveryMethod: "Store pickup",
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
        deliveryMethod: "Store pickup",
        phone: downloadedData.phone,
        email: downloadedData.email,
        country: downloadedData.country,
        city: downloadedData.city,
        street: downloadedData.street,
        house: downloadedData.house,
        apartment: downloadedData.apartment,
        confirmation: false,
        postcode: downloadedData.postcode,
        storeAddress: ""
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

    console.log("StorePickupCart", props)
    // const { register } = useForm();
    let [inputOnFocus, setInputOnFocus] = useState(false)
    const listCitiesResponse = useSelector(state => state.getCities.listCities);
    const dispatch = useDispatch();
    const listCountries = useSelector(state => state.getCountries.listCountries);
    // console.log("listCountries", listCountries)
    // const options = listCountries.map(el => ({
    //     "value": el.id,
    //     "label": el.name
    // })
    // );

    let totalPriceCart = useSelector(state => state.cartItems.totalPrice);
    // const customStyles = {
    //     option: (provided, state) => ({
    //         ...provided,
    //         backgroundColor: state.isFocused || state.isSelected ? '#f8f8f8' : '#fff',
    //         color: "#000",
    //         padding: 15,
    //     }),
    //     control: (errors, touched) => ({
    //         border: errors.storeAddress && touched.storeAddress && errors.storeAddress ? "1px solid red" : "none"
    //     })
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let getCities = {
        "city": "",
        "country": ""
    }
    const handleChangeMy = async (e, values) => {
        getCities.city = e.target.value;

    }





    function filterCountries(values) {
        let countryTags = []
        if (listCountries.length > 0) {
            listCountries.map((el) => {
                return countryTags.push(
                    <option
                        value={el.name}
                        key={el._id}


                    >
                        {el.name}
                    </option>
                )
            })
        }
        return countryTags;
    }

    function filterCities(values) {

        if (values.storeAddress.length < 3) {
            return
        }
        let filteredCities = listCitiesResponse;
        let cityTags = []
        if (values.storeAddress.length > 3) {
            filteredCities = listCitiesResponse.filter((el) => el.city.toLowerCase().indexOf(values.storeAddress.toLowerCase()) === 0)
        }
        if (filteredCities.length > 0) {
            filteredCities.map((el) => {
                return cityTags.push(
                    <li className='li-hidden input-box input-box-select'
                        value={el.city}
                        key={el._id}
                        onClick={(e, value, el) => {
                            values.storeAddress = e.target.innerText;
                            setIsOpenCitiesList(false)

                        }}
                        onBlur={(e) => {


                        }
                        }
                    >
                        {el.city}
                    </li>
                )
            })
        }
        return cityTags;
    }


    return (
        <div className='delivery-info-inner-block'>
            <Formik
                initialValues={initialValues}

                validate={(values) => {
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
                    if (!values.storeAddress) {
                        errors.storeAddress = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    if (values.storeAddress.length > 3 && !listCitiesResponse.some(city => city.city === values.storeAddress)) {
                        errors.storeAddressNotFound = <p className="required-field required-field-error">Совпадений не найдено</p>;
                    }
                    if (!values.country) {
                        errors.country = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
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
                    isValid,
                    setFieldValue,
                    getValue,
                    getSelectedValue,

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
                                ADRESS OF STORE
                            </p>
                            <div className="contact-item">
                                <input type="text" placeholder="Country" id="Country-field" list="country" onkeyup="filterFunction()"
                                    name="country"
                                    className={classNames("input-box-select select-box", { inputError: errors.country && touched.country && errors.country })}
                                    onChange={(e, value) => {
                                        handleChange(e);

                                    }}
                                    onBlur={(e) => {
                                        handleBlur(e);
                                        setInputOnFocus(true)
                                    }
                                    }
                                    onFocus={(e, value) => {
                                        values.country = "Беларусь"
                                    }
                                    }
                                    value={values.country}
                                />
                                <datalist id="country">
                                    {filterCountries(values)}
                                </datalist>
                                {errors.country && touched.country && errors.country}
                            </div>
                            <div className="contact-item">
                                <div id="myDropdown">
                                    <Field type="text" placeholder="Store address" id="storeAddress-field" list="storeAddress" onkeyup="filterFunction()"
                                        name="storeAddress"
                                        className={classNames("input-box-select select-box", { inputError: errors.storeAddress && touched.storeAddress && errors.storeAddress })}
                                        onChange={(e, value) => {
                                            handleChange(e);
                                            handleChangeMy(e);
                                            getCities.country = values.country
                                            if (getCities.city.length === 3) {
                                                dispatch({ type: "POST_CITIES_DATA", payload: getCities })
                                                //   setIsOpenCitiesList(false)
                                            }
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            setInputOnFocus(true)
                                            // setIsOpenCitiesList(false)
                                        }
                                        }
                                        onFocus={(e) => {
                                            handleBlur(e);
                                            setIsOpenCitiesList(true)

                                        }
                                        }
                                        isOpenCitiesList
                                        value={values.storeAddress}
                                        disabled={!values.country ? true : false}
                                    />
                                    <ul id="storeAddress"
                                        className={classNames("liHidden",  { selectBoxBlock: isOpenCitiesList })}>
                                        {filterCities(values)}
                                    </ul>
                                </div>
                                {console.log("valuesvalues", values)}
                                <p className='store-adress-hint'>Введите город и выберите магазин из спиская</p>
                                {inputOnFocus && values.storeAddress.length > 1 && errors.storeAddressNotFound}
                                {errors.storeAddress && touched.storeAddress && errors.storeAddress}
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
                                if (!values.email || !values.phone || !values.country || !values.storeAddress || !values.confirmation || !listCitiesResponse.some(city => city.city === values.storeAddress)) {
                                    values.confirmation = false
                                } else {
                                    dispatch({ type: "OPEN_PAYMENT_ITEM", values })
                                }
                            }}>Further</button>
                            <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_CART_ITEM" }) }}>View Cart</button>
                        </div>
                        {console.log("valuesvalues", values)}
                    </form>)
                }

            </Formik>
        </div>
    )
}



