import { createSlice } from "@reduxjs/toolkit";

const getCitiesSlice = createSlice({
    name: 'getCities',
    initialState: {
              listCities: [],
              isErrorCountries: false
    },
    reducers: {
        getListCities: (state, action) => {
            return {
                ...state,
             
                listCities: action.payload.data
            }

        },
        errorGettingListCities: (state, action) => {
            return {
                ...state,
                isErrorCountries: true             
            }
        }   
    }
})

export const { getListCities, errorGettingListCities} = getCitiesSlice.actions;
export default getCitiesSlice.reducer;


