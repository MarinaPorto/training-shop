import { createSlice } from "@reduxjs/toolkit";



const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: {
        isDelivery: false,
        isPayment: false,
        isCart: true,
        isDeliveryMenu: false,
        isPaymentMenu: false,   
        isCartMenu: true,
        isCartCompleition: false,
        totalPrice: "",
        data: [],
        paymentData: []

    },
    reducers: {
        openDeliveryItem: (state, action) => {
           let total = action.payload.totalPiceRounded ? action.payload.totalPiceRounded : state.totalPrice
            console.log("action.payload.totalPiceRounded", action.payload.totalPiceRounded)
            return {
                ...state,
                isDelivery: true,
                isPayment: false,
                isCart: false,
                isDeliveryMenu: true,
                isPaymentMenu: false,
                isCartMenu: false,
                totalPrice: total,
                isCartCompleition: false

            }
        },
        openPaymentItem: (state, action) => {
            let deliveryData = action.payload.values ? action.payload.values : state.data
            return {
                ...state,
                isDelivery: false,
                isPayment: true,
                isCart: false,
                isDeliveryMenu: false,
                isPaymentMenu: true,
                isCartMenu: false,
                isCartCompleition: false,
                data: deliveryData,
                paymentData: []
                // data: action.payload.values
            }
        },
        openCartItem: (state, action) => {
            return {
                ...state,
                isDelivery: false,
                isPayment: false,
                isCart: true,
                isDeliveryMenu: false,
                isPaymentMenu: false,
                isCartMenu: true,
                isCartCompleition: false

            }
        },
        openCartCompletionItem: (state, action) => {
            return {
                ...state,
                isDelivery: false,
                isPayment: false,
                isCart: false,
                isDeliveryMenu: false,
                isPaymentMenu: false,
                isCartMenu: false,
                isCartCompleition: true,
                paymentData: action.payload.values

            }

        }


    }
})


export const { openDeliveryItem, openPaymentItem, openCartItem, openCartCompletionItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;


