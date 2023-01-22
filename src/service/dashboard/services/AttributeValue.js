import axios from "axios";
import { BaseApi } from "../../../consts";


export const getAttributeValues= async() => {
    const address= `${BaseApi}v1/dashboard/service/attribute-value/`;
    const response= await axios.get(address);
    return response.data.data;
}

export const getAttributeValuesById= async(id) => {
    const address= `${BaseApi}v1/dashboard/service/attribute-value/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setAttributeValue = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/attribute-value/store`;
    const response= await axios.post(address, data);
    return response.data;
}

export const updateAttributeValue = async(data, id) => {
    const address= `${BaseApi}v1/dashboard/service/attribute-value/update/${id}`;
    const response= await axios.post(address, data);
    return response.data;
}

export const getAttributeValue= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/attribute-value/show/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}

export const removeAttributeValue= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/attribute-value/delete/${id}`;
    const response= await axios.delete(address);
    return response.data;
}