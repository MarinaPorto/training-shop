import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { sendEmailInfo, errorEmailInfo, changeisSentEmail } from "../reducers/reducer-post-email";

let postResponse;

export async function postEmail(payload) {
    await axios.post('https://training.cleverland.by/shop/email', payload).then(response => {
        return postResponse = response;
    })
}

export function* sendEmail(payload) {
    try {
        yield postEmail(payload);
        yield put(sendEmailInfo(postResponse));
    } catch {
        yield put(errorEmailInfo(postResponse))
    }
}

export function* changeisSentEmailStatus() {
    yield put(changeisSentEmail());
}

export function* watchPostEmail() {
    yield takeLatest("POST_EMAIL", sendEmail);
    yield takeLatest("CHANGE_IS_SENT_EMAIL", changeisSentEmailStatus);
}
