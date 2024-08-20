import { createContext, useContext, useState } from 'react';

export const PageTextContext = createContext();

export const PageTextProvider = ({ children }) => {
    const [pageText, setPageText] = useState('Accueil');

    return (
        <PageTextContext.Provider value={{ pageText, setPageText }}>
            {children}
        </PageTextContext.Provider>
    );
};

export const usePageText = () => useContext(PageTextContext);
