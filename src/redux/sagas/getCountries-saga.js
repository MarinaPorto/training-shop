import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import  { getListCountries, errorGettingListCountries} from "../reducers/reducer-get-countries";

let getCountriesResponse;

export async function getCountriesData() {
    await axios.get('https://training.cleverland.by/shop/countries').then(response => {
        
        return getCountriesResponse = response.data;
       
    })
}


export function* getListOfCountries() {
    try {
        yield getCountriesData();
        yield put(getListCountries(getCountriesResponse));
    } catch {
        yield put(errorGettingListCountries(getCountriesResponse))
    }
}


export function* watchClickSaga() {
    yield takeLatest("GET_COUNTRIES", getListOfCountries);  
}

