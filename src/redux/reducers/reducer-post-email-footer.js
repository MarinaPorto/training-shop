import { createSlice } from "@reduxjs/toolkit";

const postEmailSliceFooter = createSlice({
    name: 'postEmailFooter',
    initialState: {
        isLoadingEmailFooter: false,
        isErrorEmailFooter: false,
        isSentEmailFooter: false
    },
    reducers: {
        sendEmailInfoFooter: (state, action) => {
            return {
                ...state,
                isLoadingEmailFooter: true,
                isSentEmailFooter: true,
                data: action.payload

            }
        },
        errorEmailInfoFooter: (state, action) => {
            return {
                ...state,
                isErrorEmailFooter: true,
                isLoadingEmailFooter: true,

            }
        }

    }
})

export const { sendEmailInfoFooter, errorEmailInfoFooter } = postEmailSliceFooter.actions;
export default postEmailSliceFooter.reducer;


