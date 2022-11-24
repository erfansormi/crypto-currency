import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import { iGlobal, iGlobalInitialValue } from "./globalTypes";

const initialState: iGlobalInitialValue = {
    data: null,
    loading: true,
    error: ""
}

interface Payload {
    data: iGlobal
}

const globalSlice = createSlice({
    initialState,
    name: "global",
    reducers: {
        globalLoading: (state) => {
            state.loading = true;
        },
        globalFetchRequestSuccess: (state, action: PayloadAction<iGlobal>) => {
            state.loading = false;
            state.data = action.payload;
        },
        globalFetchRequestFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { globalFetchRequestSuccess, globalFetchRequestFailure, globalLoading } = globalSlice.actions;
export default globalSlice.reducer;