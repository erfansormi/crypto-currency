import { combineReducers } from "redux";

import coinsReducer from "./Coins/coinsReducer";
import globalReducer from "./Global/globalReducer";

const rootReducer = combineReducers({
    coins: coinsReducer,
    global: globalReducer
})

export default rootReducer;