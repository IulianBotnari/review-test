import React, { useContext, createContext } from "react";
import { useEffect, useState } from "react";

const context = createContext()


export const GlobalContext = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [logged, setLogged] = useState('');
    const [username, setUsername] = useState('')
    console.log(films);

    console.log(logged);





    async function getFilms() {
        try {
            const response = await fetch('http://127.0.0.1:3000', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.log(response.status);
                setFilms([]);
            } else {

                const data = await response.json();
                console.log(data);
                setFilms(data);
            }


        } catch (err) {
            console.error('There has been a problem with your fetch operation:', err);
            // Error handling code here...
            // alert('An error occurred while fetching data. Please try again later.');
        }
    }

    useEffect(() => {
        getFilms()
    }, [logged]);

    const values = {
        films,
        setLogged,
        setUsername,
        username

    }

    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}


export const useGlobalContext = () => useContext(context)