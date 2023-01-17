import React, { createContext, useState } from 'react';

export const Message= createContext();

const MessageAlertProvider = ({children}) => {
    const [message, setMessage]= useState('');
    return (
        <Message.Provider value={{ message, setMessage }} >
            {children}
        </Message.Provider>
    );
};

export default MessageAlertProvider;