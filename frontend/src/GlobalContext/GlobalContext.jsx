import React, { useContext, createContext } from "react";
import { useEffect, useState } from "react";

const context = createContext()


export const GlobalContext = ({ children }) => {

    const [films, setFilms] = useState();
    console.log(films);


    async function getFilms() {
        try {
            const response = await fetch('http://127.0.0.1:3000')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setFilms(data);


        }
        catch (err) {
            console.error('There has been a problem with your fetch operation:', err);
            // Error handling code here...
            alert('An error occurred while fetching data. Please try again later.');
        }
    }

    useEffect(() => {
        getFilms()
    }, []);

    const values = {
        films

    }

    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}


export const useGlobalContext = () => useContext(context)