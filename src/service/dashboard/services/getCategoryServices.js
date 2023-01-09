import axios from "axios";
import { BaseApi } from "../../../consts";


export const getServiceCategories= async() => {
    // axios.default.baseUrl = '';
    const address= `${BaseApi}v1/dashboard/service/category/`;
    const response= await axios.get(address);
    console.log(response.data)
    return response.data.data;
}