import { combineReducers } from "redux";

import coinsReducer from "./Coins/coinsReducer";
import globalReducer from "./Global/globalReducer";
import generalReducer from "./General/generalReducer";
import coinDetailReducer from "./Coins/Detail/coinDetailReducer";

const rootReducer = combineReducers({
    coins: coinsReducer,
    global: globalReducer,
    general: generalReducer,
    coin_detail: coinDetailReducer
})

export default rootReducer;