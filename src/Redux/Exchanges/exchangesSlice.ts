import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface iExchanges {
    id: string;
    name: string;
    year_established?: number;
    country: string;
    description: string;
    url: string;
    image: string;
    has_trading_incentive?: boolean;
    trust_score: number;
    trust_score_rank: number;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
}

interface InitialState {
    data: null | iExchanges[]
}

const initialState: InitialState = {
    data: null
}

const exchangesSlice = createSlice({
    initialState,
    name: "exchanges",
    reducers: {
        getExchanges: (state, action: PayloadAction<iExchanges[]>) => {
            state.data = action.payload;
        }
    }
})


export const { getExchanges } = exchangesSlice.actions;
export default exchangesSlice.reducer;