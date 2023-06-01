import axios from "axios"
import { BaseApi } from "../../consts"
import { createServicePriceFailure, createServicePriceSuccess } from "./servicePriceActions"

const initialState = {
    loading: false,
    servicePrice: [],
    error: "",
    message: ""
}

const servicePriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SERVICE_PRICE_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_SERVICE_PRICE_SUCCESS":
            return {
                loading: false,
                servicePrice: action.payload,
            }
        case "FETCH_SERVICE_PRICE_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        case "createServicePriceSuccess":
            return {
                loading: false,
                message: action.payload
            }
        case "createServicePriceFailure":
            return {
                loading: false,
                error: action.payload
            }
        case "CREATE_SERVICE_PRICE":
            return (dispatch) => {
                const address = `${BaseApi}/v1/dashboard/service/service-prices/store`;
                axios.post(address, action.payload).then(response => {
                    dispatch(createServicePriceSuccess(response.data.message))
                })
                .catch(error => {
                    const errorMsg = error.message
                    dispatch(createServicePriceFailure(errorMsg))
                })
            }
        default: return state
    }
}

export default servicePriceReducer;