import { combineReducers } from "redux";

import coinsReducer from "./Coins/coinsReducer";
import globalReducer from "./Global/globalReducer";
import generalReducer from "./General/generalReducer";

const rootReducer = combineReducers({
    coins: coinsReducer,
    global: globalReducer,
    general: generalReducer
})

export default rootReducer;