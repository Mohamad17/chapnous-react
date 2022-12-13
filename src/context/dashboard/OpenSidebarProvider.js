import React, { createContext, useState } from 'react';

export const IsOpenSideBar= createContext();

const OpenSidebarProvider = ({children}) => {
    const [isOpenSidebar, setIsOpenSidebar]= useState(true);
    return (
        <IsOpenSideBar.Provider value={{isOpenSidebar, setIsOpenSidebar}}>
            {children}
        </IsOpenSideBar.Provider>
    );
};

export default OpenSidebarProvider;