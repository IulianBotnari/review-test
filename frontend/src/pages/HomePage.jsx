import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";



export default function HomePage() {
    const { films, setLogged } = useGlobalContext()

    const handleLogout = () => {

        localStorage.removeItem('token');
        setLogged('false')

    };


    return (
        <>
            <div className="mb-3">
                <details>
                    <summary>Utente: Botnari</summary>
                    <a href="/review">Vai alle tue recensioni</a><br />
                    <button onClick={handleLogout} className='btn btn-dark'> Logout</button>

                </details>
            </div>

            {films && films.map(film => (
                <div key={film.id}>
                    <h2>{film.title}</h2>
                    <p>{film.description}</p>
                </div>
            ))}
        </>

    )
}