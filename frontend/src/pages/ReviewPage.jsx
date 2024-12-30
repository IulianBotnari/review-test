import { useGlobalContext } from "../GlobalContext/GlobalContext"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function ReviewPage() {

    const { films } = useGlobalContext()

    console.log(films);


    const { username } = useParams()


    const [reviews, setReviews] = useState([])


    async function getReviews() {
        try {
            const response = await fetch(`http://localhost:3000/reviews/${username}`)
            const data = await response.json()

            setReviews(data)

        } catch (err) {
            return console.error(err)
        }
    }

    useEffect(() => {
        getReviews()
    }, [username])


    function vote(vote) {
        console.log(vote);
        return (
            <>
                {Array.from({ length: vote }, index => (
                    <i key={index} className="bi bi-star-fill text-warning" />
                ))}
            </>
        );
    }




    return (
        <>
            {reviews.map((review, index) => (
                <div key={index} className="d-flex my-2 border">
                    {films.map((film, filmindex) => (film.title === review.title ? <img style={{ width: '80px', borderRadius: '0' }} key={filmindex} src={`/${film.poster}`} alt={film.title} /> : null))}
                    <div className="mx-2">

                        <p> Titolo: {review.title}</p>
                        <p> Recenzione: {review.review}</p>
                        <p> Voto: {vote(review.vote)}</p>

                    </div>

                </div>
            ))}
        </>
    )

}