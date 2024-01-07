import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';




export function LatestFilms() {
//state variabler
    const [films, setFilms] = useState([]);

    //get funktion 
    useEffect(() => {
        axios.get('http://localhost:3000/films')
          .then(response => {
            // Sortera filmerna baserat på året i fallande ordning
            const sortedFilms = response.data.sort((a, b) => b.year - a.year);
      
            const fiveFilms = sortedFilms.slice(0,5);
            setFilms(fiveFilms);
          })
          .catch(err => console.log(err));
      }, []);

    return (
        <>
        <section className="bg-grey p-4 mb-4">
            <div className="container">
                <h2 className='mb-4 mt-6 '>Nya filmer <FontAwesomeIcon icon={faChevronRight} /></h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {films.map((film, index)  => (
    
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