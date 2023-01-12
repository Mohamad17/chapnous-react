import axios from "axios";
import { BaseApi } from "../../../consts";


export const getServiceCategories= async() => {
    const address= `${BaseApi}v1/dashboard/service/category/`;
    const response= await axios.get(address);
    // console.log(response.data)
    return response.data.data;
}

export const setCategoryService = async(data) => {
    const address= `${BaseApi}v1/dashboard/service/category/store`;
    const response= await axios.post(address, data);
    return response.data;
}