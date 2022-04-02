import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { sendEmailInfoFooter, errorEmailInfoFooter } from "../reducers/reducer-post-email-footer";

let postResponse;

async function postEmail(payload) {
    await axios.post('https://training.cleverland.by/shop/email', payload).then(response => {
        return postResponse = response;
    })
}

export function* sendEmailFooter(payload) {
    try {
        yield postEmail(payload);
        yield put(sendEmailInfoFooter(postResponse));
    } catch {
        yield put(errorEmailInfoFooter(postResponse))
    }
}

export function* watchsendEmailFooter() {
    yield takeLatest("POST_EMAIL_FOOTER", sendEmailFooter);
}

