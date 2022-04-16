import { takeLatest, put } from "redux-saga/effects";
import { openDeliveryItem, openPaymentItem, openCartItem, openCartCompletionItem } from "../reducers/reducer-cart-items";


export function* openCartDeliveryItem(payload) {
    yield put(openDeliveryItem(payload));
}

export function* openCartPaymentItem(payload) {
    yield put(openPaymentItem(payload));
}

export function* openCartMainItem() {
    yield put(openCartItem());
}

export function* openCartCompletionItemMenu() {
    yield put(openCartCompletionItem());
}

export function* watchClickSaga() {
    yield takeLatest("OPEN_DELIVERY_ITEM", openCartDeliveryItem);
    yield takeLatest("OPEN_PAYMENT_ITEM", openCartPaymentItem);
    yield takeLatest("OPEN_CART_ITEM", openCartMainItem);
    yield takeLatest("OPEN_COMPLETION_ITEM", openCartCompletionItemMenu)
}

