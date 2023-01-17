import axios from "axios";
import { BaseApi } from "../../../consts";


export const getServices= async() => {
    const address= `${BaseApi}v1/dashboard/service/service/`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setService = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/service/store`;
    const response= await axios.post(address, data);
    return response.data;
}

export const updateService = async(data, id) => {
    const address= `${BaseApi}v1/dashboard/service/service/update/${id}`;
    const response= await axios.post(address, data);
    return response.data;
}

export const getService= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/service/show/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}

export const removeService= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/service/delete/${id}`;
    const response= await axios.delete(address);
    return response.data;
}