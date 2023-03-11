import axios from "axios";
import { BaseApi } from "../../../consts";


export const getServices= async() => {
    const address= `${BaseApi}v1/dashboard/service/service/`;
    const response= await axios.get(address);
    return response.data.data;
}

export const getServiceAttributes= async(id) => {
    const address= `${BaseApi}v1/dashboard/service/service/service-attributes/${id}`;
    const response= await axios.get(address);
    const attributes = [];
    response.data.data.map(item => {
        let attribute= { label: item.name, value: item.id };
        return attributes.push(attribute);
    })
    return attributes;
}

export const getServiceGalleries= async(id) => {
    const address= `${BaseApi}v1/dashboard/service/service/galleries/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setServiceGallery = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/service/galleries/store`;
    const response= await axios.post(address, data);
    return response.data;
}
export const removeServiceGallery= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/service/galleries/delete/${id}`;
    const response= await axios.delete(address);
    return response.data;
}
export const getServiceHelpFiles= async(id) => {
    const address= `${BaseApi}v1/dashboard/service/service/help-files/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setServiceHelpFile = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/service/help-files/store`;
    const response= await axios.post(address, data);
    return response.data;
}
export const removeServiceHelpFile= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/service/help-files/delete/${id}`;
    const response= await axios.delete(address);
    return response.data;
}
export const setService = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/service/store`;
    const response= await axios.post(address, data);
    return response.data;
}
export const editServiceAttributes = async(data , id) => {
    const address= `${BaseApi}v1/dashboard/service/service/service-attributes/store/${id}`;
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