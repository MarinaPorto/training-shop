import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { sendOrder, errorOrder } from "../reducers/reducer-post-order";

let postOrderResponse;

export async function postOrderData(payload) {
    console.log("payload", payload.orderInformation)
    await axios.post('https://training.cleverland.by/shop/cart', payload.orderInformation).then(response => {
        console.log("response", response)
        return postOrderResponse = response;
    })
}


export function* sendOrderInfo(payload) {
    try {
        yield postOrderData(payload);
        yield put(sendOrder(postOrderResponse));
    } catch {
        yield put(errorOrder(postOrderResponse))
    }
}



export function* watchClickSaga() {
    yield takeLatest("POST_ORDER", sendOrderInfo);
    
}

