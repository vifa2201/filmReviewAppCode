// importerar tillägg och komponenter
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Rating } from '../components/Rating';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  //get metod för att hämta film baserat på id
  useEffect(() => {
    axios.get(`http://localhost:3000/films/${id}`)
      .then(response => {
        setFilm(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  //funktion för att lägga till recension
  const handleRatingSubmit = (review) => {
    axios
      .patch(`http://localhost:3000/films/${id}`, {
        reviews: [...film.reviews, review], // Lägg till den nya recensionen
      })
      .then((response) => {
        setFilm(response.data); // Uppdatera lokala staten med den nya recensionen
      })
      .catch((error) => {
        console.error("Fel vid skickande av recension:", error);
      });
  }
  //tar fram medelbetyget för film
  const calculateAverageRating = () => {
    if (film.reviews && film.reviews.length > 0) {
      //räknar summan av betygen
      const totalRating = film.reviews.reduce((sum, review) => sum + review.rating, 0);
      //tar fram medelvärder
      const averageRating = totalRating / film.reviews.length;
      return averageRating.toFixed(1); // Avrunda till en decimal
    }
    return 0;
  };
  //om ingen film hittas
  if (!film) {
    return <p>Ingen film hittades.</p>;
  }

  return (
    <>
      {/**brödsmulor */}
      <div className="container">
        <ul class="breadcrumb">
          <li>  <Link to="/"> Hem
          </Link></li>
          <li><Link to="/films">Filmer </Link></li>
          <li>{film.title}</li>
        </ul>
      </div>

      <main className="bg-darkGrey flex justify-center items-center w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Höger kolumn med bild */}
          <div className="md:w-1/2 p-8 text-center">
            {/* skriver ut bilden */}
            <img src={`http://localhost:3000/${film.coverImage}`} className="w-72 mx-auto" alt="" />
          </div>
          {/* Vänster kolumn med text */}
          <section className="md:w-1/2  p-10 md:p-0">
            <h1 className='text-5xl font-bold'>{film.title}</h1>
            <p>{film.genre},  {film.year}</p>
            <div className="stars my-2">
              <div className="flex items-center">

                {/* skriver ut filmens betyg */}
                <FaStar
                  className="Star"
                  size={30}
                  color="#FFD700" // Här sätter du färgen till gul
                />
                <strong>  {calculateAverageRating()}</strong>/5

              </div>
            </div>
             {/* komponent för att recensera*/}
            <Rating onRatingSubmit={handleRatingSubmit} />
            <h2 className='text-lg mt-4'>Beskrivning:</h2>
            <p>{film.description} </p>
          </section>
        </div>
      </main>


      <section className="bg-grey flex justify-center items-center w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="hidden md:block md:w-1/2 p-8 text-center">
            <div className="flex justify-center">
              <ul className="text-left leading-loose text-lg">
                 {/* skriver ut ytterligare info om filmen */}
                <li><h3>Information:</h3></li>
                <li><strong>Titel: </strong>  {film.title}</li>
                <li> <strong>År: </strong> {film.year}</li>
                <li> <strong>Genre: </strong> {film.genre}</li>


              </ul>
            </div>
          </div>


          <div className="w-full md:w-1/2 p-10 md:p-4 mx-auto">
            <h3>Senaste recensioner</h3>
            <a href={`/films/${id}/reviews`} className='text-pink underline'>Se alla recensioner</a>
            <div className="line"></div>
            {/* Rendera recensionerna */}
            {film.reviews && film.reviews.length > 0 && (
              <div>
                {film.reviews.slice(-3).map((review, index) => (
                  <div key={index} className="review">
                    <h4 className="mt-4 mb-2">{review.comment}</h4>
                    {[...Array(5)].map((star, index) => (
                      <label>
                         {/* skriver ut betyget med stjärnor */}
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
            )}
          </div>
        </div>

      </section>
    </>
  );
}