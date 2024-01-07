// Reviews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Reviews() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  //metod för att hämta film baserat med id
  useEffect(() => {
    axios.get(`http://localhost:3000/films/${id}`)
      .then(response => {
        setFilm(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
     {/* Brödsmulor */}
        <div className="container">
    <ul class="breadcrumb">
    <li>  <Link to="/"> Hem
        </Link></li>
  <li><Link to="/films">Filmer </Link></li>
  <li>  <Link to={`/films/${id}`}>{film && film.title}</Link></li>
  <li>Recensioner</li>
</ul>
</div>

    <main className="bg-darkGrey flex justify-center items-center w-full">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Höger kolumn med bild */}
      <div className="md:w-1/2 p-8 text-center">
            <img src={`http://localhost:3000/${film && film.coverImage}`} className="w-56 mx-auto" alt="" />
          </div>
            {/* Vänster kolumn med text */}
            <section className="md:w-1/2 p-4">
            <h1 className='text-5xl font-bold'>{film && film.title}</h1>
        <p className='text-lg font-bold'>Genre: {film && film.genre}</p>
        <p className='text-lg font-bold'>Antal recensioner: {` ${film && film.reviews ? film.reviews.length : 0}`}</p>
        <p className='text-lg mt-2 '>{film && film.description}</p>
  
          
          </section>
        </div>
      </main>
      <section className="bg-grey p-4">
        <div className="container  md:w-3/5 ">
<h2 className='font-bold'>Alla recensioner</h2>
      {/* Rendera alla recensioner  */}
      {film && film.reviews && film.reviews.map((review, index) => (
        <div key={index} className="review p-2">
          <h4 className="mt-4 mb-2">{review.comment}</h4>
           {/* gör om formatet för datum*/}
          <p>{review.date && new Date(review.date).toLocaleDateString()}</p>
           {/* skriver ut betyget med stjärnor*/}
          {[...Array(5)].map((star, index) => (
            <label>
                 <FaStar
              key={index}
              className='Star'
              size={20}
              color={index < review.rating ? "yellow" : "#e4e5e5"}
            />
          
            </label>
         
          ))}

          <div className="line"></div>
        </div>
      ))}
    </div>
    </section>
  </>
  );
}