import axios from "axios";
import { BaseApi } from "../../../consts";

export const getServicePrices= async() => {
    const address= `${BaseApi}v1/dashboard/service/service-prices/`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setServicePrice = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/service-prices/store`;
    const response= await axios.post(address, data);
    return response.data;
}

export const updateServicePrice = async(data, id) => {
    const address= `${BaseApi}v1/dashboard/service/service-prices/update/${id}`;
    const response= await axios.post(address, data);
    return response.data;
}

export const removeServicePrice= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/service/delete/${id}`;
    const response= await axios.delete(address);
    return response.data;
}