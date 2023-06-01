import axios from "axios";
import { BaseApi } from "../../consts";

const fetchServicePriceRequest = () => {
    return {
        type: "FETCH_SERVICE_PRICE_REQUEST"
    }
}

const fetchServicePriceSuccess = (servicePrice) => {
    return {
        type: "FETCH_SERVICE_PRICE_SUCCESS",
        payload: servicePrice
    }
}

const fetchServicePriceFailure = error => {
    return {
        type: "FETCH_SERVICE_PRICE_FAILURE",
        payload: error
    }
}

export const createServicePrice = data => {
    return {
        type: "CREATE_SERVICE_PRICE",
        payload: data
    }
}

export const createServicePriceSuccess = message => {
    return {
        type: "CREATE_SERVICE_PRICE_SUCCESS",
        payload: message
    }
}
export const createServicePriceFailure = errMsg => {
    return {
        type: "CREATE_SERVICE_PRICE_FAILURE",
        payload: errMsg
    }
}
export const fetchServicePrice = (serviceId) => {
    return (dispatch) => {
        dispatch(fetchServicePriceRequest());
        const address= `${BaseApi}v1/dashboard/service/service-prices/show/${serviceId}`;
        axios.get(address)
            .then(response => {
                const servicePrice = response.data.data;
                dispatch(fetchServicePriceSuccess(servicePrice))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchServicePriceFailure(errorMsg))
            })
    }
}