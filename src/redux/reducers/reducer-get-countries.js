import { createSlice } from "@reduxjs/toolkit";

const getCountriesSlice = createSlice({
    name: 'getCountries',
    initialState: {
              listCountries: [],
              isErrorCountries: false
    },
    reducers: {
        getListCountries: (state, action) => {
            return {
                ...state,
             
                listCountries: action.payload
            }

        },
        errorGettingListCountries: (state, action) => {
            return {
                ...state,
                isErrorCountries: true             
            }
        }   
    }
})

export const { getListCountries, errorGettingListCountries} = getCountriesSlice.actions;
export default getCountriesSlice.reducer;


