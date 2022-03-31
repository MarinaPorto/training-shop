import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { putProducts, errorData } from "../reducers/reducer-products";
import { putCurrentProduct, errorCurrentData } from "../reducers/reducer-current-product";
import { sendEmailInfo, errorEmailInfo, changeisSentEmail } from "../reducers/reducer-post-email";
import { sendEmailInfoFooter, errorEmailInfoFooter } from "../reducers/reducer-post-email-footer";
import { sendReview, errorReview, changeIsSentStatus } from "../reducers/reducer-post-review";



let data;
let currentData;
let postResponse;
let postReviewResponse;


async function getProducts() {
    await axios.get('https://training.cleverland.by/shop/products').then(response => {
        return data = response.data
    })
}

async function getCurrentProduct(payload) {
    await axios.get(`https://training.cleverland.by/shop/product/${payload.payload.params}`).then(response => {

        return currentData = response.data
    })
}


async function postEmail(payload) {

    await axios.post('https://training.cleverland.by/shop/email', payload).then(response => {

        console.log("postResponsepos", postResponse)
       

        return postResponse = response;

    })
}

async function postReviewData(payload) {

    await axios.post('https://training.cleverland.by/shop/product/review', payload.payload).then(response => {

        console.log("postReviewResponse", postReviewResponse)
        console.log("postResponseposRRRRRRRRR", payload)
        return postReviewResponse = response;

    })
}







export function* workerSaga() {
    try {
        yield getProducts();
        yield put(putProducts(data))

    } catch {
        yield put(errorData("Ошибка получения данных"))
    }
}

export function* currentProductWorkerSaga(payload) {
    try {
        yield getCurrentProduct(payload);

        yield put(putCurrentProduct(currentData))

    } catch {
        yield put(errorCurrentData("Ошибка получения данных"))
    }

}


export function* sendEmail(payload) {
    try {
        yield postEmail(payload);
        yield put(sendEmailInfo(postResponse));




    } catch {
        // yield put(errorEmailInfo("Ошибка при отправке данных данных")) 
        console.log("error payload", payload.payload);
        yield put(errorEmailInfo(postResponse))
    }

}


export function* sendEmailFooter(payload) {
    try {
        yield postEmail(payload);
        yield put(sendEmailInfoFooter(postResponse));




    } catch {
        // yield put(errorEmailInfo("Ошибка при отправке данных данных")) 
        console.log("error payload", payload.payload);
        yield put(errorEmailInfoFooter(postResponse))
    }

}


export function* sendReviewProduct(payload) {
    try {
        yield postReviewData(payload);
        yield put(sendReview(postReviewResponse));
        console.log("post payload", postReviewResponse);




    } catch {
        // yield put(errorEmailInfo("Ошибка при отправке данных данных")) 
        console.log("error payload", payload);
        yield put(errorReview(postReviewResponse))
    }

}


export function* changeisSentEmailStatus () {
    
       
        yield put(changeisSentEmail());




    }


    export function* changeisSentReviewStatus () {
    
       
        yield put( changeIsSentStatus());




    }


export function* watchClickSaga() {
    yield takeLatest("GET_PRODUCTS", workerSaga);
    yield takeLatest("GET_CURRENT_PRODUCT", currentProductWorkerSaga);
    yield takeLatest("POST_EMAIL", sendEmail);
    yield takeLatest("POST_EMAIL_FOOTER", sendEmailFooter);
    yield takeLatest("POST_REVIEW", sendReviewProduct);
    yield takeLatest("CHANGE_IS_SENT_EMAIL", changeisSentEmailStatus);
    yield takeLatest("CHANGE_IS_SENT_REVIEW_STATUS", changeisSentReviewStatus);
}

export default function* rootSaga() {
    yield watchClickSaga();
}