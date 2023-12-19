// FilmDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Rating } from '../components/Rating';

export default function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/films/${id}`)
      .then(response => {
        setFilm(response.data);
        console.log(response.data); // Logga filmens detaljer till konsolen
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleRatingSubmit = (review) => {
    axios
    .patch(`http://localhost:3000/films/${id}`, {
      reviews: [...film.reviews, review], // Lägg till den nya recensionen
    })
    .then((response) => {
      console.log("Recension skickad", response.data);
      setFilm(response.data); // Uppdatera lokala staten med den nya recensionen
    })
    .catch((error) => {
      console.error("Fel vid skickande av recension:", error);
    });
  }

  if (!film) {
    return <p>Ingen film hittades.</p>;
  }

  return (
    <>
      <main className="bg-darkGrey flex justify-center items-center w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Höger kolumn med bild och text */}
          <div className="md:w-1/2 p-8 text-center">
            <img src={`http://localhost:3000/${film.coverImage}`} className="w-72 mx-auto" alt="" />
          </div>
          {/* Vänster kolumn med text */}
          <section className="md:w-1/2 p-4">
            <h1 className='text-5xl font-bold'>{film.title}</h1>
           

            <p><strong>Genre: </strong> {film.genre}</p>
             <p> <strong>År:</strong>{film.year}</p>
   
          
            <div className="stars my-2">
            <p> <FaStar className='star' /><strong> 7.5</strong>/10<br /> 100 recensioner </p> 
            </div>
            <Rating onRatingSubmit={handleRatingSubmit}/>
            <h4 className='mt-4'>Beskrivning</h4>
            <p>{film.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque porro accusamus vel assumenda minima, enim dolores architecto aliquam corrupti!</p>
          </section>
        </div>
      </main>
      <section className="bg-grey p-4">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="table-responsive text-center mx-auto">
              <h3 className="mb-4">Liknande filmer</h3>
              <table className="w-100 text-sm text-left rtl:text-right">
                <tbody>
                  <tr className="border-b">
                    <th scope="row">1</th>
                    <td scope="row">
                      <img src="./img/image.jpeg" className="w-12 h-12 mx-auto mb-2" alt="" />
                    </td>
                    <td scope="row">
                      <strong>Filmens titel</strong> <br /> regissörens namn
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row">2</th>
                    <td scope="row">
                      <img src="./img/image.jpeg" className="w-12 h-12 mx-auto mt-4 mb-2" alt="" />
                    </td>
                    <td scope="row">
                      <strong>Filmens titel</strong> <br /> regissörens namn
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row">3</th>
                    <td scope="row">
                      <img src="./img/image.jpeg" className="w-12 h-12 mx-auto mt-4 mb-2" alt="" />
                    </td>
                    <td scope="row">
                      <strong>Filmens titel</strong> <br /> regissörens namn
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="md:w-3/4 p-4">
              <h3>Användares recensioner</h3>
              <a href={`/films/${id}/reviews`}>Se alla recensioner</a>
              <div className="line"></div>
             {/* Rendera recensionerna */}
             {film.reviews && film.reviews.length > 0 && (
                <div>
                  {film.reviews.slice(-3).map((review, index) => (
                    <div key={index} className="review">
                      <h4 className="mt-4 mb-2">{review.comment}</h4>
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}