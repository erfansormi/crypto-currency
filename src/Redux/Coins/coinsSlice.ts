import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// types
import { iCoinsInitialValue, iCoins } from "./coinsTypes"

const initialState: iCoinsInitialValue = {
    coins: null,
    page: 1
}

const coinsSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {
        coinsFetchRequest: (state, action: PayloadAction<iCoins[]>) => {
            state.coins = action.payload;
        },
        handleCoinsPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
})

export const { coinsFetchRequest, handleCoinsPage } = coinsSlice.actions;
export default coinsSlice.reducer;