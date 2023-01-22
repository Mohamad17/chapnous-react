import React , { createContext, useEffect, useState } from 'react';
import { getAttributes } from '../../service/dashboard/services/Attribute';

export const Attributes= createContext();

const AttributeProvider = ({children}) => {
    const [attributes, setAttributes]= useState([]);

    useEffect(() => {
        const fetch= async () => {
            setAttributes(await getAttributes());
        }
        fetch();
    },[]);

    return (
        <Attributes.Provider value={{ attributes, setAttributes }} >
            {children}
        </Attributes.Provider>
    );
};

export default AttributeProvider;