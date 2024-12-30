
import { useParams } from "react-router"
import { useState } from "react"
import { useGlobalContext } from "../GlobalContext/GlobalContext"

export default function AddReviewPage() {

    const { films, users, filmId, userName } = useGlobalContext()
    const params = useParams()
    const filmTitle = params.film_title
    const [review, setReview] = useState({})

    const handleReviewChange = (e) => {
        setReview({
            ...review,
            film_id: filmId,
            user_id: films.find(film => film.username === userName ? film.id : null),
            review: e.target.value,
            vote: 0,
            username: userName

        })
    }


    async function addReview(jsonReview) {

        try {
            const response = await fetch('/addreview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonReview)

            })
        }


        catch (error) {
            console.error(error)

        }

    }





    return (
        <div>
            Add Review Page
        </div>
    )

}