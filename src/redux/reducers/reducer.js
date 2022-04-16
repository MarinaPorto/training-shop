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
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(state => !isSameProduct(state, action));
        },
        addCounter: (state, action) => {
            state.itemsInCart.forEach((el) => {
                if (isSameProduct(el, action)) {
                    el.price = Math.round((el.price / el.count * (el.count + 1)) * 100) / 100
                    el.count += 1
                }
            })
        },
        removeCounter: (state, action) => {
            state.itemsInCart.forEach((el) => {
                if (isSameProduct(el, action) && el.count > 1) {
                    el.price = Math.round((el.price / el.count * (el.count - 1)) * 100) / 100
                    el.count -= 1
                }
            })
        },
        clearCart: (state) => {
            return {
                 ...state,
            itemsInCart: []
            }           
        }        
    }
})



export const { setItemInCart, deleteItemFromCart, addCounter, removeCounter, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


