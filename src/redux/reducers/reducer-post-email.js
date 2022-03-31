import { createSlice } from "@reduxjs/toolkit";

const postEmailSlice = createSlice({
    name: 'postEmail',
    initialState: {
        isLoadingEmail: false,
        isErrorEmail: false,
        isSentEmail: false
    },
    reducers: {
        sendEmailInfo: (state, action) => {
            return {
                ...state,
                isLoadingEmail: true,
                isSentEmail: true,
                data: action.payload

            }

        },
        errorEmailInfo: (state, action) => {
            return {
                ...state,
                isErrorEmail: true,
                isLoadingEmail: true,

            }
        },
        changeisSentEmail: (state, action) => {
            return {
                ...state,
                isSentEmail: false,
                isErrorEmail: false,
                data: action.payload
            }
        }

    }
})

export const { sendEmailInfo, errorEmailInfo, changeisSentEmail } = postEmailSlice.actions;
export default postEmailSlice.reducer;


