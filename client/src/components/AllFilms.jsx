import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function AllFilms() {
    //state variabler
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/films')
            .then(response => {
                // Sortera filmerna baserat på titeln i stigande ordning
                const sortedFilms = response.data.sort((a, b) => a.title.localeCompare(b.title));
                setFilms(sortedFilms);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <section className="bg-grey p-4">
                <div className="container">
                    <h2 className='mb-4 mt-6 '>Alla filmer<FontAwesomeIcon icon={faChevronRight} /></h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-2">
                        {films.map((film, index) => (
                            <div key={index}>
                                {/**utskrift av bild */}
                                <a href={`/films/${film._id}`}>
                                    <img src={`http://localhost:3000/${film.coverImage}`} alt={film.title} className=' sm:w-w-48 ' />
                                </a >
                                <p className='mb-4'>{film.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}