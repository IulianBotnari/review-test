import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import Style from "./HomePage.module.css"
import { useNavigate } from "react-router";


export default function HomePage() {
    const { films, setLogged, username, setFilmId } = useGlobalContext()
    const [user, setUser] = useState(localStorage.getItem('user'));

    const navigate = useNavigate()

    function goToReviewPage(params, e) {

        setFilmId(e.target.getAttribute('data-btn-attribute'))

        console.log(filmId);


        return navigate(`/add/${params}`)

    }

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
        <div className={Style.div_container}>
            <div className="my-1">
                <details>
                    <summary className={Style.user}>Utente: {user}</summary>
                    <div className={Style.user_details}>
                        <a href={`/review/${user}`}>Vai alle tue recensioni<i className="bi bi-arrow-right-circle-fill mx-2" /></a><br />
                        <button onClick={handleLogout} className='btn btn-dark'> Logout</button>

                    </div>

                </details>
            </div>
            <div className="d-flex container">

                {films && films.map(film => (
                    <div key={film.id} className="col-6 mx-3 p-3">
                        <h2>{film.title}</h2>
                        <div className={Style.img_w}>
                            <img src={film.poster} alt="poster" style={{ width: '100%' }} />
                        </div>
                        <p className="my-3"><i className="bi bi-search-heart p-1 bg-danger border rounded text-light" /> {film.description}</p>
                        <button className="btn bg-light" data-btn-attribute={film.id} onClick={(e) => goToReviewPage(film.title, e)}>Lascia una recensione</button>
                    </div>
                ))}

            </div>
        </div>

    )
}