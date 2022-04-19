import { createSlice } from "@reduxjs/toolkit";

const postOrderSlice = createSlice({
    name: 'postOrder',
    initialState: {
        isErrorOrder: false,
        isLoadingOrder: true,
        data: ''
    },
    reducers: {
        sendOrder: (state, action) => {
            let result = action.payload ? action.payload : state.data
            return {
                ...state,
                isLoadingOrder: false,
                isErrorOrder: false,
                data: result
            }
        },
        errorOrder: (state, action) => {
            let resultError = action.payload ? action.payload : state.data
            return {
                ...state,
                isErrorOrder: true,
                isLoadingOrder: false,
                data: resultError
            }
        }
    }
})

export const { sendOrder, errorOrder } = postOrderSlice.actions;
export default postOrderSlice.reducer;


