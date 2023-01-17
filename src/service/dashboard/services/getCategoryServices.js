import axios from "axios";
import { BaseApi } from "../../../consts";


export const getServiceCategories= async() => {
    const address= `${BaseApi}v1/dashboard/service/category/`;
    const response= await axios.get(address);
    return response.data.data;
}

export const setCategoryService = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/category/store`;
    const response= await axios.post(address, data);
    return response.data;
}

export const updateCategoryService = async(data, id) => {
    const address= `${BaseApi}v1/dashboard/service/category/update/${id}`;
    const response= await axios.post(address, data);
    return response.data;
}

export const getServiceCategory= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/category/show/${id}`;
    const response= await axios.get(address);
    return response.data.data;
}

export const removeCategoryService= async (id) => {
    const address= `${BaseApi}v1/dashboard/service/category/delete/${id}`;
    const response= await axios.delete(address);
    return response.data;
}