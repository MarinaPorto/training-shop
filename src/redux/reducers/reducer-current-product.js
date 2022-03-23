import { createSlice } from "@reduxjs/toolkit";

const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState: {
        product: {},
        isLoading: true,
        isError: false
    },
    reducers: {
        putCurrentProduct: (state, action) => {
            return {
                ...state,
                product: action.payload,
                isLoading: false
            }
        },
        errorCurrentData: (state, action) => {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }

    }
})

export const { putCurrentProduct, errorCurrentData } = currentProductSlice.actions;
export default currentProductSlice.reducer;


