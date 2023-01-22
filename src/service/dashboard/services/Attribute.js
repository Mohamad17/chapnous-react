import axios from "axios";
import { BaseApi } from "../../../consts";

export const getAttributes= async() => {
    const address= `${BaseApi}v1/dashboard/service/attribute/`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setAttribute = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/attribute/store`;
    const response= await axios.post(address, data);
    return response.data;
}

export const updateAttribute = async(data, id) => {
    const address= `${BaseApi}v1/dashboard/service/attribute/update/${id}`;
    const response= await axios.post(address, data);
    return response.data;
}

export const getAttribute= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/attribute/show/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}