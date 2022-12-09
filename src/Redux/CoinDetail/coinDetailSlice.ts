import { createSlice, PayloadActionCreator } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import { CoinDetailInitialValue, CoinDetailType, ChartDetailType, CandleDetailType } from "./coinDetailTypes"

const initialState: CoinDetailInitialValue = {
    chart: null,
    detail: null,
    candle: null,
    chartErr: "",
    detailErr: "",
    chartType: "line"
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
        fetchCoinCandle: (state, action: PayloadAction<CandleDetailType>) => {
            state.candle = action.payload;
            state.chartErr = "";
        },
        handleChartErr: (state, action: PayloadAction<string>) => {
            state.chartErr = action.payload;
        },
        changeChartType: (state, action: PayloadAction<"line" | "candle">) => {
            state.chartType = action.payload;
        }
    }
})

export const { fetchCoinChart, fetchCoinDetail, handleChartErr, fetchCoinCandle, changeChartType } = coinDetailSlice.actions;
export default coinDetailSlice.reducer;