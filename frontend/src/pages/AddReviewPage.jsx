
import { useParams } from "react-router"
import { useState } from "react"
import { useGlobalContext } from "../GlobalContext/GlobalContext"
import Style from "./AddReviewPage.module.css"

export default function AddReviewPage() {

    const { films, users, filmId, userName, user } = useGlobalContext()
    const params = useParams()
    const filmTitle = params.film_title
    const [review, setReview] = useState({})
    const [rating, setRating] = useState(1)
    const [hovered, setHovered] = useState(null)

    console.log(filmId);
    console.log(user);
    console.log(rating);



    function handleReviewChange() {
        setReview({
            // {...review,}
            film_id: filmId,
            user_id: films.find(film => film.username === userName ? film.id : null),
            review: e.target.value,
            vote: rating,
            username: user

        })
    }


    console.log(review);



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

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const handleClick = (index) => {
        setRating(index + 1)
    };





    return (
        <>
            <div className={Style.review_container}>
                <h1 className="mb-3">Aggiungi una recensione</h1>

                <form onSubmit={handleReviewChange}>
                    {/* <div className="mb-3">
                        <label htmlFor="reviewtitle" className="form-label">Titolo Recensione</label>
                        <input type="text" className="form-control" id="reviewtitle" placeholder="Inserisci titolo" />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="reviewtext" className="form-label">Recensione</label>
                        <textarea className="form-control" id="reviewtext" rows="5"></textarea>
                    </div>
                    <strong>Vota </strong>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <i
                            key={index}
                            className={`bi bi-star-fill ${hovered >= index ? "text-warning" : ""}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(index)}
                        ></i>
                    ))} <br />

                    <button type="submit" className="btn btn-dark my-2">Aggiungi</button>


                </form>
            </div>
        </>
    )

}