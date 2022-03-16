import { createSlice } from "@reduxjs/toolkit";


function isSameProduct(product, action) {

    return product.name === action.payload.name && product.color === action.payload.color && product.size === action.payload.size
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {

            state.itemsInCart.push(action.payload)
            console.log(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            // state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload);
            console.log("state.itemsInCart", state.itemsInCart)
            state.itemsInCart = state.itemsInCart.filter(state => !isSameProduct(state, action));


            console.log("action.payload", action.payload)
            console.log("state.itemsInCart", state.itemsInCart)


        },
        addCounter: (state, action) => {
            // state.itemsInCart.push(action.payload)
            state.itemsInCart.forEach((el) => {
                if (isSameProduct(el, action)) {
                    el.price = Math.round((el.price / el.count * (el.count + 1)) * 100) / 100
                    el.count += 1
                }
            })

            console.log("action.payload", action.payload)
        },
        removeCounter: (state, action) => {
            // state.itemsInCart.push(action.payload)
            state.itemsInCart.forEach((el) => {
                if (isSameProduct(el, action) && el.count > 1) {
                    el.price = Math.round((el.price / el.count * (el.count - 1)) * 100) / 100
                    el.count -= 1
                }
            })

            console.log("action.payload", action.payload)
        }
    }
})

export const { setItemInCart, deleteItemFromCart, addCounter, removeCounter } = cartSlice.actions;
export default cartSlice.reducer;