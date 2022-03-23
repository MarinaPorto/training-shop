import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { putProducts, errorData } from "../reducers/reducer-products";
import { putCurrentProduct, errorCurrentData } from "../reducers/reducer-current-product";


let data;
let currentData;

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

export function* watchClickSaga() {
    yield takeLatest("GET_PRODUCTS", workerSaga);
    yield takeLatest("GET_CURRENT_PRODUCT", currentProductWorkerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}