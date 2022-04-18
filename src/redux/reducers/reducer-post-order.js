import { createSlice } from "@reduxjs/toolkit";

const postOrderSlice = createSlice({
    name: 'postOrder',
    initialState: {
        isErrorOrder: false,
        isLoadingOrder: true,
        data: {}
    },
    reducers: {
        sendOrder: (state, action) => {
            return {
                ...state,
                isLoadingOrder: false,
                isErrorOrder: false,
                data: action.payload
            }
        },
        errorOrder: (state, action) => {
            return {
                ...state,
                isErrorOrder: true,
                isLoadingOrder: false,
                data: action.payload
            }
        }
    }
})

export const { sendOrder, errorOrder } = postOrderSlice.actions;
export default postOrderSlice.reducer;


