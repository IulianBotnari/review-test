import React, { useContext, createContext } from "react";
import { useEffect, useState } from "react";

const context = createContext()


export const GlobalContext = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [logged, setLogged] = useState('');
    const [username, setUsername] = useState('')
    const [users, setUsers] = useState({})
    const [filmId, setFilmId] = useState()
    console.log(users);



    async function getUsers() {
        try {
            const response = await fetch('http://127.0.0.1:3000/getUsers')
            const data = await response.json()
            setUsers(data)

        } catch (error) {
            console.error(error)
        }
    }

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
                setFilms([]);
            } else {

                const data = await response.json();
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
        getUsers()
    }, [logged]);

    const values = {
        films,
        setLogged,
        setUsername,
        username,
        users,
        setFilmId,
        filmId

    }

    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}


export const useGlobalContext = () => useContext(context)