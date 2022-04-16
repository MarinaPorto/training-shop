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
            return {
                ...state,
                isDelivery: true,
                isPayment: false,
                isCart: false,
                isDeliveryMenu: true,
                isPaymentMenu: false,
                isCartMenu: false,
                totalPrice: action.payload.totalPiceRounded,
                isCartCompleition: false,

            }
        },
        openPaymentItem: (state, action) => {
            return {
                ...state,
                isDelivery: false,
                isPayment: true,
                isCart: false,
                isDeliveryMenu: false,
                isPaymentMenu: true,
                isCartMenu: false,
                isCartCompleition: false,
                data: action.payload.values
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
                isCartCompleition: false,
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
                
            }

        }
        

    }
})


export const { openDeliveryItem, openPaymentItem, openCartItem, openCartCompletionItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;


