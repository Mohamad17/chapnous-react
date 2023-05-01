const initialState = {
    loading: false,
    servicePrices: [],
    error: ""
}

const servicePricesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_SERVICE_PRICES_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_SERVICE_PRICES_SUCCESS":
            return {
                loading: false,
                servicePrices: action.payload.servicePrices,
                service : action.payload.serviceName
            }
        case "FETCH_PRODUCTS_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default servicePricesReducer;