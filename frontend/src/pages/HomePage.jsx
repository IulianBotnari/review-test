import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";



export default function HomePage() {
    const { films } = useGlobalContext()


    return (
        <>


            {films && films.map(film => (
                <div key={film.id}>
                    <h2>{film.title}</h2>
                    <p>{film.description}</p>
                </div>
            ))}
        </>

    )
}