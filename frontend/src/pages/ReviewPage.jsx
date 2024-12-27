import { useGlobalContext } from "../GlobalContext/GlobalContext"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function ReviewPage() {

    const { username } = useParams()
    console.log(username);


    const [reviews, setReviews] = useState([])

    console.log(reviews);


    async function getReviews() {
        try {
            const response = await fetch(`http://localhost:3000/reviews/${username}`)
            const data = await response.json()

            setReviews(data)
            console.log(data);

        } catch (err) {
            return console.error(err)
        }
    }

    useEffect(() => {
        getReviews()
    }, [username])








    return (
        <>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p>{review.title}</p>
                    <p>{review.review}</p>
                    <p>{review.vote}</p>
                </div>
            ))}
        </>
    )

}