import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { putProducts, errorData } from "../reducers/reducer-products";

let data;

async function getProducts() {
    await axios.get('https://training.cleverland.by/shop/products').then(response => {
        return data = response.data
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

export function* watchGetProduct() {
    yield takeLatest("GET_PRODUCTS", workerSaga);
}
