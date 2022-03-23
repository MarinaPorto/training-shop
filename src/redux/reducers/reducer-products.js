import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: {
            men: [],
            women: []
        },
        isLoading: true,
        isError: false
    },
    reducers: {
        putProducts: (state, action) => {
            return {
                ...state,
                products: {
                    men: [...action.payload.men],
                    women: [...action.payload.women]
                },
                isLoading: false
            }
        },
        errorData: (state, action) => {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }

    }
})


export const { putProducts, errorData } = productsSlice.actions;
export default productsSlice.reducer;


