
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import axios from 'axios';

import { FaStar } from 'react-icons/fa';
import { Rating } from '../components/Rating';
//komponent för header

export function Header() {
  const [films, setFilms] = useState([]);

  //hämtar filmer
  useEffect(() => {
    axios.get('http://localhost:3000/films')
      .then(response => {
        //sorterar film efter högst betyg
        const filmsWithAverageRating = response.data.map(film => {
          const averageRating = film.reviews.reduce((sum, review) => sum + review.rating, 0) / film.reviews.length;
          return { ...film, averageRating };
        });
        const sortedFilms = filmsWithAverageRating.sort((a, b) => b.averageRating - a.averageRating);
        setFilms(sortedFilms);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
     {/* skriver bara ut 1 film*/}
      {films.slice(0, 1).map((film, index) => (
        <header key={index} className="bg-darkGrey flex justify-center items-center w-full ">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <section className="md:w-1/2 ">
              <h1 id='hero'>{film.title}</h1>
              <p className='font-semibold my-2'>{film.genre}</p>
              <div className="stars my-2">
                {[...Array(5)].map((star, index) => (
                  <label>
                  <FaStar
                    key={index}
                    className='Star'
                    size={20}
                    color={index < film.averageRating ? "yellow" : "#e4e5e5"}
                  />
                  </label>
                ))}
              </div>
              <p>{film.description}</p>
            </section>
            <div className="md:w-1/2 p-8 text-center">
              <img src={`http://localhost:3000/${film.coverImage}`} className='w-72 mx-auto' alt={film.title} />
            </div>
          </div>
        </header>
      ))}
    </>
  );
}
