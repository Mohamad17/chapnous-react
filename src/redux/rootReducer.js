import { combineReducers } from "redux";
import servicePricesReducer from "./service-prices/servicePricesReducer";

const rootReducer= combineReducers({
    servicePricesState: servicePricesReducer
})

export default rootReducer;