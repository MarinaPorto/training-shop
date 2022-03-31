import { createSlice } from "@reduxjs/toolkit";

const postReviewSlice = createSlice({
    name: 'postReview',
    initialState: {
        isLoadingReview: false,
        isErrorReview: false,
        isSentReview: false,
        data: {}
    },
    reducers: {
        sendReview: (state, action) => {
            return {
                ...state,
                isLoadingReview: true,
                isSentReview: true,
                data: action.payload
            }

        },
        errorReview: (state, action) => {
            return {
                ...state,
                isErrorReview: true,
                isLoadingReview: true,

            }
        },
        changeIsSentStatus: (state, action) => {
            return {
                ...state,
                isSentReview: false,
                isErrorReview: false,


            }
        }
    }
})

export const { sendReview, errorReview, changeIsSentStatus } = postReviewSlice.actions;
export default postReviewSlice.reducer;


