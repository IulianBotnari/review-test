import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";



export default function HomePage() {
    const { films, setLogged, username } = useGlobalContext()
    const [user, setUser] = useState(localStorage.getItem('user'));

    useEffect(() => {
        if (username) {
            localStorage.setItem('user', username)
            setUser(username)
        }
    }, [username])

    const handleLogout = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setLogged('false')
        setUser(null)

    };


    return (
        <>
            <div className="mb-3">
                <details>
                    <summary>Utente: {user}</summary>
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