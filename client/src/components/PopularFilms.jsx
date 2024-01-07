import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';




export function PopularFilms() {
//state variabler
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
 // Begränsa listan till de fem mest populära filmerna
 const topFiveFilms = sortedFilms.slice(0, 5);
       setFilms(topFiveFilms);
        })
            .catch(err => console.log(err));
    }, []);


    return (
        <>
        <section className="bg-grey p-4">
            <div className="container">
                <h2 className='mb-4 mt-6'>Populäraste filmerna <FontAwesomeIcon icon={faChevronRight} /></h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {films.map((film, index)  => (
                console.log(film.coverImage),
                <div key={index}>
                    {/**utskrift av bild */}
                    <a href={`/films/${film._id}`}>
                    <img src={`http://localhost:3000/${film.coverImage}`} alt={film.title} className=' sm:w-w-48 '/>
                    </a>
                        <h4>{film.title}</h4>
                    </div>
               )   )}
               </div>
            </div>
            </section>
        </>
    )
}