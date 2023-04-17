import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import { CoinDetailInitialValue } from "../../../types/Coins/coinDetail";

const initialState: CoinDetailInitialValue = {
    chartDay: "1",
    chartType: "line"
}

const coinDetailSlice = createSlice({
    name: "coin_detail",
    initialState,
    reducers: {
        changeChartType: (state, action: PayloadAction<"line" | "candle">) => {
            state.chartType = action.payload;
        },
        changeChartDay: (state, action: PayloadAction<string>) => {
            state.chartDay = action.payload;
        }
    }
})

export const { changeChartType, changeChartDay } = coinDetailSlice.actions;
export default coinDetailSlice.reducer;