import React, { createContext, useEffect, useState } from 'react';
import { getServices } from '../../service/dashboard/services/Service';

export const Services= createContext();


const ServicesProvider = ({children}) => {
    const [services, setServices]= useState([]);

    useEffect(() => {
        const fetch= async () => {
            setServices(await getServices());
        }
        fetch();
    },[]);

    return (
        <Services.Provider value={{ services, setServices }} >
            {children}
        </Services.Provider>
    );
};

export default ServicesProvider;