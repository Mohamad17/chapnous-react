import axios from "axios";
import { BaseApi } from "../../consts";

const fetchServicePricesRequest = () => {
    return {
        type: "FETCH_SERVICE_PRICES_REQUEST"
    }
}

const fetchServicePricesSuccess = (servicePrices, serviceName) => {
    return {
        type: "FETCH_SERVICE_PRICES_SUCCESS",
        payload: {servicePrices, serviceName}
    }
}

const fetchServicePricesFailure = error => {
    return {
        type: "FETCH_SERVICE_PRICES_FAILURE",
        payload: error
    }
}
export const fetchServicePrices = (serviceId) => {
    return (dispatch) => {
        dispatch(fetchServicePricesRequest());
        const address= `${BaseApi}v1/dashboard/service/service-prices/${serviceId}`;
        console.log(address)
        axios.get(address)
            .then(response => {
                const servicePrices = response.data.data.data;
                const serviceName = response.data.data.service_name;
                dispatch(fetchServicePricesSuccess(servicePrices, serviceName))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchServicePricesFailure(errorMsg))
            })
    }
}