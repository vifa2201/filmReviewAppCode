// Reviews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/films/${id}`)
      .then(response => {
        setFilm(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <section className='bg-grey'>
            <h2>Recensioner för {film && film.title}</h2>
  <div className='container' >

      {/* Rendera alla recensioner här */}
      {film && film.reviews && film.reviews.map((review, index) => (
        <div key={index} className="review">
          <h4 className="mt-4 mb-2">{review.comment}</h4>
          <p>{review.date}</p>
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
  
  );
}