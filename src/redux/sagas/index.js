import { takeLatest } from "redux-saga/effects";
import { workerSaga} from "./getProducts-saga";
import { changeisSentEmailStatus, sendEmail} from "./postEmail-saga";
import { sendEmailFooter} from "./postEmailFooter-saga";
import { sendReviewProduct, changeisSentReviewStatus} from "./postReview-saga";
import { getListOfCountries } from "./getCountries-saga";
import { sendCitiesData } from "./postCities-saga";
import { openCartDeliveryItem, openCartPaymentItem, openCartMainItem, openCartCompletionItemMenu, clearFieldData } from "./openCartItem-saga";
import { sendOrderInfo } from "./postOrder-saga";


export function* watchClickSaga() {
    yield takeLatest("GET_PRODUCTS", workerSaga);
    yield takeLatest("POST_EMAIL", sendEmail);
    yield takeLatest("POST_EMAIL_FOOTER", sendEmailFooter);
    yield takeLatest("POST_REVIEW", sendReviewProduct);
    yield takeLatest("CHANGE_IS_SENT_EMAIL", changeisSentEmailStatus);
    yield takeLatest("CHANGE_IS_SENT_REVIEW_STATUS", changeisSentReviewStatus);
    yield takeLatest("GET_COUNTRIES", getListOfCountries);
    yield takeLatest("POST_CITIES_DATA", sendCitiesData);
    yield takeLatest("OPEN_DELIVERY_ITEM", openCartDeliveryItem);
    yield takeLatest("OPEN_PAYMENT_ITEM", openCartPaymentItem);
    yield takeLatest("OPEN_CART_ITEM", openCartMainItem);
    yield takeLatest("OPEN_COMPLETION_ITEM", openCartCompletionItemMenu);    
    yield takeLatest("POST_ORDER", sendOrderInfo);
    yield takeLatest("CLEAR_FIELDS_DATA", clearFieldData);




}

export default function* rootSaga() {
    yield watchClickSaga();
}

