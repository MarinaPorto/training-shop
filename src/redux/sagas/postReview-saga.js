import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { sendReview, errorReview, changeIsSentStatus } from "../reducers/reducer-post-review";

let postReviewResponse;

export async function postReviewData(payload) {
    await axios.post('https://training.cleverland.by/shop/product/review', payload.payload).then(response => {
        return postReviewResponse = response;
    })
}


export function* sendReviewProduct(payload) {
    try {
        yield postReviewData(payload);
        yield put(sendReview(postReviewResponse));
    } catch {
        yield put(errorReview(postReviewResponse))
    }
}

export function* changeisSentReviewStatus() {
    yield put(changeIsSentStatus());
}

export function* watchClickSaga() {
    yield takeLatest("POST_REVIEW", sendReviewProduct);
    yield takeLatest("CHANGE_IS_SENT_REVIEW_STATUS", changeisSentReviewStatus);
}

