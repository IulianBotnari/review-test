import React, { useContext, createContext } from "react";

const context = createContext()


export const GlobalContext = ({ children }) => {

    const values = {

    }

    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}


export const useGlobalContext = () => useContext(context)