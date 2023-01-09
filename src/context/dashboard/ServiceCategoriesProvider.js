import React, { createContext, useEffect, useState } from 'react';
import { getServiceCategories } from '../../service/dashboard/services/getCategoryServices';

export const ServiceCategories= createContext();

const ServiceCategoriesProvider = ({children}) => {
    const [categories, setCategories]= useState([]);

    useEffect(() => {
        const fetch= async () => {
            setCategories(await getServiceCategories());
        }
        fetch();
    },[]);

    return (
        <ServiceCategories.Provider value={{ categories, setCategories }} >
            {children}
        </ServiceCategories.Provider>
    );
};

export default ServiceCategoriesProvider;