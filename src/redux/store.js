import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/reducer";
import productsReducer from "./reducers/reducer-products";
import currentProductReducer from "./reducers/reducer-current-product";
import postEmailReducer from "./reducers/reducer-post-email";
import postEmailFooterReducer from "./reducers/reducer-post-email-footer";
import postReviewReducer from "./reducers/reducer-post-review";


import { combineReducers} from "redux";
// import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    currentProduct: currentProductReducer,
    postEmail: postEmailReducer,
    postEmailFooter: postEmailFooterReducer,
    postReview: postReviewReducer

  
  })


export const store = configureStore({
    reducer: rootReducer,
    middleware
  
});

sagaMiddleware.run(rootSaga);