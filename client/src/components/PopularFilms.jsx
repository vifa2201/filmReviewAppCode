import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';




export function PopularFilms() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/films')
            .then(response => {
         // Beräkna det genomsnittliga betyget för varje film
         const filmsWithAverageRating = response.data.map(film => {
            const averageRating = film.reviews.reduce((sum, review) => sum + review.rating, 0) / film.reviews.length;
            return { ...film, averageRating };
          });
       // Sortera filmerna baserat på det genomsnittliga betyget i fallande ordning
       const sortedFilms = filmsWithAverageRating.sort((a, b) => b.averageRating - a.averageRating);

       setFilms(sortedFilms);
        })
            .catch(err => console.log(err));
    }, []);


    return (
        <>
        <section className="bg-grey p-4">
            <div className="container">
                <h2 className='mb-4 mt-6 px-4'>Populära filmer <FontAwesomeIcon icon={faChevronRight} /></h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
               {films.map((film, index)  => (
                console.log(film.coverImage),
                <div key={index}>
                    {/**utskrift av bild */}
                    <a href={`/films/${film._id}`}>
                    <img src={`http://localhost:3000/${film.coverImage}`} alt={film.title} />
                    </a>
                        <p>{film.title}</p>
                    </div>
               )   )}
               </div>
            </div>
            </section>
        </>
    )
}