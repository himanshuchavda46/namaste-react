import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["banana","apple"]
    },
    reducers: {
        addItem: (state,action) => {
            if(!state.items.includes(action.payload)) state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            const index = state.items.indexOf(action.payload);
            if(index>=0) state.items.splice(index,1);
        },
        clearCart: (state) => {
            state.items  = [];
        }
    }
});

export const {addItem, removeItem, clearCard} = cartSlice.actions;

export default cartSlice.reducer;

