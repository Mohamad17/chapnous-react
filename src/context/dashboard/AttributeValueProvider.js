import React , { createContext , useEffect, useState } from 'react';
import { getAttributeValues } from '../../service/dashboard/services/AttributeValue';

export const AttributeValue= createContext()

const AttributeValueProvider = ({children}) => {
    const [attributeValues, setAttributeValues]= useState([]);

    useEffect(() => {
        const fetch= async () => {
            setAttributeValues(await getAttributeValues());
        }
        fetch();
    },[]);

    return (
        <AttributeValue.Provider value={{ attributeValues, setAttributeValues }} >
            {children}
        </AttributeValue.Provider>
    );
};

export default AttributeValueProvider;