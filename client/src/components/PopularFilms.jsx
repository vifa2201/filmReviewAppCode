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
                setFilms(response.data);
                console.log(response.data); // Logga filmerna till konsolen
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