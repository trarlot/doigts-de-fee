// // context.js
// import React, { createContext, useContext, useState } from 'react';

// const LoadingContext = createContext();

// const LoadingProvider = ({ children }) => {
//     const [isLoading, setIsLoading] = useState(true);
//     return (
//         <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
//             {children}
//         </LoadingContext.Provider>
//     );
// };

// const useLoading = () => {
//     const context = useContext(LoadingContext);
//     if (!context) {
//         throw new Error('useLoading must be used within a LoadingProvider');
//     }
//     return context;
// };

// export { LoadingProvider, useLoading };
