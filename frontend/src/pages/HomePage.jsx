import { useEffect } from "react";


export default function HomePage() {

    async function getFilms() {
        try {
            const response = await fetch('http://127.0.0.1:3000')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);


        }
        catch (err) {
            console.error('There has been a problem with your fetch operation:', err);
            // Error handling code here...
            alert('An error occurred while fetching data. Please try again later.');
        }
    }

    useEffect(() => {
        getFilms()
    }, []);



    return (
        <>
            <h1>Home Page</h1>
        </>

    )
}