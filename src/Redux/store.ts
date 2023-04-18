import { configureStore } from "@reduxjs/toolkit";

// reducers
import globalReducer from "./Global/globalSlice";
import generalReducer from "./General/generalSlice";
import coinDetailReducer from "./CoinDetail/coinDetailSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        general: generalReducer,
        coin_detail: coinDetailReducer,
    }
})

export default store;

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch