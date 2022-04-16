import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { getListCities, errorGettingListCities } from "../reducers/reducer-get-cities";

let postCitiesResponse;

export async function postCitiesData(payload) {
    await axios.post('https://training.cleverland.by/shop/search/cities', payload.payload).then(response => {
        console.log(payload)
        console.log(response)
        return postCitiesResponse = response;

    })
}


export function* sendCitiesData(payload) {
    console.log("payload", payload)
    try {
        yield postCitiesData(payload);
        console.log("payload", payload)
        yield put(getListCities(postCitiesResponse));
    } catch {
        yield put(errorGettingListCities(postCitiesResponse))
    }
}



export function* watchClickSaga() {
    yield takeLatest("POST_CITIES_DATA", sendCitiesData);
   
}

