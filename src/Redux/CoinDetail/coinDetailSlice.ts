import { createSlice, PayloadActionCreator } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import { CoinDetailInitialValue, CoinDetailType, ChartDetailType } from "./coinDetailTypes"

const initialState: CoinDetailInitialValue = {
    chart: null,
    detail: null,
    chartErr: "",
    detailErr: ""
}

const coinDetailSlice = createSlice({
    name: "coin_detail",
    initialState,
    reducers: {
        fetchCoinDetail: (state, action: PayloadAction<CoinDetailType>) => {
            state.detail = action.payload;
            state.detailErr = "";
        },
        fetchCoinChart: (state, action: PayloadAction<ChartDetailType>) => {
            state.chart = action.payload;
            state.chartErr = "";
        },
        handleChartErr: (state, action: PayloadAction<string>) => {
            state.chartErr = action.payload;
        }
    }
})

export const { fetchCoinChart, fetchCoinDetail, handleChartErr } = coinDetailSlice.actions;
export default coinDetailSlice.reducer;