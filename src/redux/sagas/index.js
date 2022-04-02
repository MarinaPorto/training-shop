import { takeLatest } from "redux-saga/effects";
import { workerSaga} from "./getProducts-saga";
import { changeisSentEmailStatus, sendEmail} from "./postEmail-saga";
import { sendEmailFooter} from "./postEmailFooter-saga";
import { sendReviewProduct, changeisSentReviewStatus} from "./postReview-saga";

export function* watchClickSaga() {
    yield takeLatest("GET_PRODUCTS", workerSaga);
    yield takeLatest("POST_EMAIL", sendEmail);
    yield takeLatest("POST_EMAIL_FOOTER", sendEmailFooter);
    yield takeLatest("POST_REVIEW", sendReviewProduct);
    yield takeLatest("CHANGE_IS_SENT_EMAIL", changeisSentEmailStatus);
    yield takeLatest("CHANGE_IS_SENT_REVIEW_STATUS", changeisSentReviewStatus);
}

export default function* rootSaga() {
    yield watchClickSaga();
}