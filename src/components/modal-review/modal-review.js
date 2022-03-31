
import React from "react";
import './modal-review.css';
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { LoaderBtn } from "../loader-btn/loader-btn";
// import { getProductStars } from "../../utils/getProductStars";

export const ModalReview = (props) => {

    const dispatch = useDispatch();
    const errorPostMessage = useSelector(state => state.postReview.isErrorReview);
    const loadingPostProcess = useSelector(state => state.postReview.isLoadingReview);
    const isPostFinish = useSelector(state => state.postReview.data);
    const isSentEmail = useSelector(state => state.postReview.isSentReview);


    let [isLoading, setisLoading] = useState(false);
    let [isxcfvbg, setisxcfvbg] = useState(true);




    let currentProductID = props.currentProductID





    // useEffect(() => {
    //     if(isSentEmail) {
    //         props.setisReviewOpen(false);
    //     document.body.style.overflow = "";
    //     console.log("стейт новый")
    //     }


    //   }, [isSentEmail, props])



    function closeReview() {
        props.setisReviewOpen(!props.isReviewOpen)

        document.body.style.overflow = "";

    }
    // function addReview(){
    //      dispatch({ type: "GET_PRODUCTS" });
    // }




    return (
        <div className="container">
            <div className="modal-wrapper" onClick={closeReview}>
                <div className="modal-content" onClick={e => e.stopPropagation()} data-test-id="review-modal">
                    <div className="close-form-btn" onClick={closeReview}>X</div>

                    {/* {getProductStars(3)} */}

                    <h3 className="review-modal-title">Write a review</h3>
                    <Formik
                        initialValues={{
                            id: currentProductID,
                            name: "",
                            text: "",
                            rating: 0
                        }
                        }
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = <p className="required-field">Поле обязательно для заполнения</p>;
                            }
                            if (!values.text) {
                                errors.text = <p className="required-field">Поле обязательно для заполнения</p>;
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {

                            setisLoading(true)
                            console.log('знак загрузки', isLoading);
                            values.rating = +values.rating
                            console.log(JSON.stringify(values, null, 2));



                            dispatch({ type: "POST_REVIEW", payload: values });


                            // (errorPostMessage === false && closeReview())

                            resetForm()


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
                            isValid,
                            dirty,
                            resetForm

                        }) => (
                            <form onSubmit={handleSubmit} className="rewiew__form">
                                <div class="rating-area">
                                    <input type="radio" id="star-5" className="rating" name="rating" value="5" onChange={handleChange} />
                                    <label htmlFor="star-5" title="Оценка «5»"></label>
                                    <input type="radio" id="star-4" className="rating" name="rating" value="4" onChange={handleChange} />
                                    <label htmlFor="star-4" title="Оценка «4»"></label>
                                    <input type="radio" id="star-3" className="rating" name="rating" value="3" onChange={handleChange} />
                                    <label htmlFor="star-3" title="Оценка «3»"></label>
                                    <input type="radio" id="star-2" className="rating" name="rating" value="2" onChange={handleChange} />
                                    <label htmlFor="star-2" title="Оценка «2»"></label>
                                    <input type="radio" id="star-1" className="rating" name="rating" value="1" onChange={handleChange} />
                                    <label htmlFor="star-1" title="Оценка «1»"></label>
                                </div>
                                <input
                                    className="review-name-input"
                                    placeholder="Имя"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    data-test-id="review-name-field"
                                />
                                {errors.name && touched.name && errors.name}

                                <textarea rows="10" cols="45"
                                    className="review-text-input"
                                    placeholder="Комментарий"
                                    type="text"
                                    name="text"

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.text}
                                    data-test-id="review-text-field"
                                ></textarea>
                                {errors.text && touched.text && errors.text}
                                <button type="submit" className="subscribe-block-banner-btn" disabled={!(isValid && dirty) || isSubmitting} data-test-id="review-submit-button">



                                    {isLoading ? <LoaderBtn /> : <div className="btn-hidden-block"></div>}
                                    {(isPostFinish || errorPostMessage) && setisLoading(false)}
                                    {isSentEmail === true ? closeReview() : ""}

                                    {/* {isSentEmail && closeReview() } */}
                                    {/* {errorPostMessage === true ? <p className="required-field">Ошибка при отправке отзыва</p> :  closeReview() } */}
                                    {/* {console.log("я isSentEmail внутри кнопки", isSentEmail)}
                                    {console.log("я внутри кнопки и не закрыл окно потому что isSentEmail === false")}
                                    {console.log("я errorPostMessage внутри кнопки", errorPostMessage)}
                                    {console.log("я внутри кнопки и вывел сообщение потому что errorPostMessage === true")} */}

                                    <p className="btn-text">Send</p>
                                </button>
                                {errorPostMessage && <p className="required-field">Ошибка при отправке отзыва</p>}
                                {/* {isSentEmail && <p className="post-success">Отзыв отравлен успешно</p>} */}
                                {/* {isSentEmail ? closeReview() : ""} */}

                                {/* {errorPostMessage === true && <p className="required-field">Ошибка при отправке отзыва</p>}
                                 */}
                                {/* {errorPostMessage === true ? <p className="required-field">Ошибка при отправке отзыва</p> :  props.setisReviewOpen(false) } */}


                            </form>
                        )}
                    </Formik>
                    {/* {isSentEmail && closeReview()} */}

                </div>
            </div>
        </div>
    )
}



