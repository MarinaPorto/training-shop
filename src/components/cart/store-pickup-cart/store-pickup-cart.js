
import './store-pickup-cart.css';
import { useState } from 'react';
import Select from 'react-select';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { Field, Formik } from 'formik';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import DataListInput from "react-datalist-input";



export const StorePickupCart = (props) => {

    let [inputOnFocus, setInputOnFocus] = useState(false)
    const listCitiesResponse = useSelector(state => state.getCities.listCities);
    console.log("listCitiesResponse", listCitiesResponse)
    const dispatch = useDispatch();
    const listCountries = useSelector(state => state.getCountries.listCountries);
    const options = listCountries.map(el => ({
        "value": el.id,
        "label": el.name
    })
    );

    let totalPriceCart = useSelector(state => state.cartItems.totalPrice);
    const phoneNumberMask = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused || state.isSelected ? '#f8f8f8' : '#fff',
            color: "#000",
            padding: 15,
        }),
        control: (errors, touched) => ({
            border: errors.storeAddress && touched.storeAddress && errors.storeAddress ? "1px solid red" : "none"
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let getCities = {
        "city": "",
        "country": ""
    }

    const handleChangeMy = async (e) => {
        const input = e.target
        getCities.city = e.target.value

        const fieldValues = {

            [input.name]: e.nativeEvent.data
        }
        console.log("updating parent form", fieldValues);
        console.log("updating parent form 2", getCities);
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

        console.log("filteredCities", filteredCities)
        if (filteredCities.length > 0) {
            filteredCities.map((el) => {
                console.log("el", el)
                return cityTags.push(
                    <option
                        value={el.city}
                        key={el._id}
                    >
                        {el.city}
                    </option>


                    // <div className="city-item" key={el._id}>
                    //     <span className="city-name-item">{el.city}</span>
                    // </div>
                )
            })
        }
        //  else {
        //     cityTags.push(
        //         <div className="city-item" key="zzzzzzzz">
        //             ноги
        //         </div>)
        // }

        console.log("cityTags", cityTags)

        return cityTags;

    }



    return (

        <div className='delivery-info-inner-block'>
            <Formik
                initialValues={{
                    deliveryMethod: "Store pickup",
                    phone: '',
                    email: '',
                    country: '',
                    storeAddress: '',
                    confirmation: false,
                    city: '',
                    street: '',
                    house: '',
                    apartment: '',
                    postcode: ""
                }}

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
                        !/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/gm.test(values.phone)
                    ) {
                        errors.phone = <p className="required-field required-field-error">Неправильно введен номер телефона</p>;
                    }
                    if (!values.storeAddress) {
                        errors.storeAddress = <p className="required-field required-field-error">Поле должно быть заполнено</p>;
                    }
                    if (!listCitiesResponse.some(city => city.city === values.storeAddress)) {
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
                            <IMaskInput
                                // mask={phoneNumberMask}
                                className={classNames("input-box", { inputError: errors.phone })}
                                placeholder="+375 (_ _)_ _ _ _ _ _ _"
                                type="text"
                                name="phone"
                                id='phone'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
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
                                ADRESS OF STORE
                            </p>
                            <div className="contact-item">

                                <Select name="country"
                                    styles={customStyles}
                                    border="1px solig green"

                                    placeholder="Country"
                                    options={options}
                                    className={classNames("input-box-select select-box", { inputError: errors.country })}
                                    // className='input-box-select select-box'
                                    onChange={(option, value, getCities) => {
                                        setFieldValue("country", option.id);
                                        console.log("fgfhgh", option.label);
                                        values.country = setFieldValue("country", option.label);
                                        value = setFieldValue("country", option.label)
                                    }}
                                    onBlur={() => {
                                        handleBlur({ target: { name: 'country' } });
                                    }}
                                >
                                </Select>
                                {errors.country && touched.country && errors.country}

                                {console.log("values.countryyyyyyyyyyyyyy", values.country)}
                                {console.log("values.countryyyyyyyyyyyyyy pfffff", values)}

                            </div>
                            <div className="contact-item">
                                {/* делаю выпадающий список */}
                                <div id="myDropdown"
                                >
                                    <Field type="text" placeholder="Store address" id="storeAddress-field" list="storeAddress" onkeyup="filterFunction()"
                                        name="storeAddress"
                                        className={classNames("input-box-select select-box", { inputError: errors.storeAddress })}
                                        onChange={(e, value) => {
                                            handleChange(e);
                                            handleChangeMy(e);
                                            getCities.country = values.country

                                            console.log("listCitiesResponse при количестве знаков меньше трех", listCitiesResponse)

                                            if (getCities.city.length === 3) {
                                                console.log("длинна города 3 символа", getCities)
                                                dispatch({ type: "POST_CITIES_DATA", payload: getCities })
                                                console.log("listCitiesResponse внутри поля", listCitiesResponse)
                                            }
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            setInputOnFocus(true)
                                        }
                                        }
                                        value={values.storeAddress}
                                        disabled={!values.country ? true : false}
                                    />
                                    <datalist id="storeAddress">
                                        {filterCities(values)}
                                    </datalist>

                                    {/* <DataListInput
                                        placeholder="Select an option from the drop down menu..."
                                        items={items}
                                        onSelect={onSelect}
                                    /> */}
                                    <div className="dropdown_cities-list">

                                        {/* {filteredCities = listCitiesResponse.filter((el) => el.city.toLowerCase().indexOf(values.storeAddress.toLowerCase()) === 0)}
                                        {console.log("filteredCities", filteredCities)}
                                        {filteredCities.length > 0
                                            ?
                                            filteredCities.map((el) => {
                                                console.log("el", el)
                                                return (
                                                    <div className="city-item" key={el._id}>
                                                        <span className="city-name-item">{el.city}</span>
                                                    </div>
                                                )
                                            })
                                            :
                                        ""
                                        } */}
                                    </div>

                                </div>
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
                                if (!values.email || !values.phone || !values.country || !values.storeAddress || !values.confirmation) {
                                    values.confirmation = false

                                } else {
                                    dispatch({ type: "OPEN_PAYMENT_ITEM", values })

                                }
                            }}>Further</button>
                            <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_CART_ITEM" }) }}>View Cart</button>
                        </div>
                    </form>
                )
                }
            </Formik>
        </div>
    )
}



