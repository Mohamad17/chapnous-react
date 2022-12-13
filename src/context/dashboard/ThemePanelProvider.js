import React, { createContext, useEffect, useState } from 'react';
export const IsDarkMode = createContext();

const ThemePanelProvider = ({ children }) => {
    const [darkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('darkmode') === null) {
            localStorage.setItem('darkmode', 'light');
            console.log('not set darkmode')
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else if (localStorage.getItem('darkmode') === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else if (localStorage.getItem('darkmode') === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, [setIsDarkMode])
    return (
        <IsDarkMode.Provider value={{ darkMode, setIsDarkMode }} >
            {children}
        </IsDarkMode.Provider>
    );
};

export default ThemePanelProvider;