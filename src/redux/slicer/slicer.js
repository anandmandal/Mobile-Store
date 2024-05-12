import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartItemsCount:0
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.cartItemsCount = state.cartItems.length;
        },
        removeFromCart:(state, action)=>{
            const index = state.cartItems.findIndex(object => {
                return object.id === action.payload.id;
            })
            state.cartItems.splice(index, 1);
            state.cartItemsCount = state.cartItems.length;
        }
    }
});

export const { addToCart,removeFromCart }=cartSlicer.actions;
export default cartSlicer.reducer;