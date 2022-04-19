import { takeLatest, put } from "redux-saga/effects";
import { openDeliveryItem, openPaymentItem, openCartItem, openCartCompletionItem, clearData } from "../reducers/reducer-cart-items";


export function* openCartDeliveryItem(payload) {
    yield put(openDeliveryItem(payload));
}

export function* openCartPaymentItem(payload) {
    console.log("payload", payload)
    yield put(openPaymentItem(payload));
}

export function* openCartMainItem() {
    yield put(openCartItem());
}

export function* openCartCompletionItemMenu(payload) {
    yield put(openCartCompletionItem(payload));
}

export function* clearFieldData() {
    yield put(clearData());
}


export function* watchClickSaga() {
    yield takeLatest("OPEN_DELIVERY_ITEM", openCartDeliveryItem);
    yield takeLatest("OPEN_PAYMENT_ITEM", openCartPaymentItem);
    yield takeLatest("OPEN_CART_ITEM", openCartMainItem);
    yield takeLatest("OPEN_COMPLETION_ITEM", openCartCompletionItemMenu);
    yield takeLatest("CLEAR_FIELDS_DATA", clearFieldData);

}

