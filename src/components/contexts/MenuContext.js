'use client';
import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [titleName, setTitleName] = useState('Doigts de fée');
    return (
        <MenuContext.Provider
            value={{ isActive, setIsActive, titleName, setTitleName }}>
            {children}
        </MenuContext.Provider>
    );
};

const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }

    return context;
};

export { MenuProvider, useMenu };
