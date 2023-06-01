import { combineReducers } from "redux";
import servicePriceReducer from "./service-price/servicePriceReducer";
import servicePricesReducer from "./service-prices/servicePricesReducer";

const rootReducer= combineReducers({
    servicePricesState: servicePricesReducer,
    servicePriceState : servicePriceReducer
})

export default rootReducer;