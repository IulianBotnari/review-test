
import { useParams } from "react-router"
import { useState } from "react"

export default function AddReviewPage() {
    const params = useParams()
    const filmTitle = params.film_title
    const [review, setReview] = useState({})


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