import { createSlice } from "@reduxjs/toolkit";

const postOrderSlice = createSlice({
    name: 'postOrder',
    initialState: {
        isErrorOrder: false,
        isSentOrder: false,
        data: {}
    },
    reducers: {
        sendOrder: (state, action) => {
            return {
                ...state,

                isSentOrder: true,
                data: action.payload
            }

        },
        errorOrder: (state, action) => {
            return {
                ...state,
                isErrorOrder: true,
                data: action.payload


            }
        }
        
        
    }
})

export const { sendOrder, errorOrder } = postOrderSlice.actions;
export default postOrderSlice.reducer;


