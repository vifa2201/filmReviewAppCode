//komponent för att lägga till recension
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export function Rating({ onRatingSubmit }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');

  const handleRating = (currentRating) => {
    setRating(currentRating);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Skicka betyg till huvudkomponenten
    onRatingSubmit({ rating, comment });

    // Nollställ state-variablerna efter att betyget har skickats
    setRating(null);
    setComment('');
  };

  return (
    <div>
      <p><strong>Recensera filmen: </strong></p>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        const isFilled = currentRating <= rating;
 {/* för att kunna lägga till recension med stjärnor istället för siffror*/}
        return (
          
          <label key={currentRating}>
            <input
              className='hidden'
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => handleRating(currentRating)}
            />
            <FaStar
              className='Star'
              size={30}
              color={isFilled ? 'yellow' : '#e4e5e5'}
            />
          </label>
        );
      })}
      <br />
      <label>
        Kommentar: <br />
        <input
          type="text"
          value={comment}
          onChange={handleComment}
          className='bg-white p-1 rounded'
        />
      </label>

      <button onClick={handleSubmit} className='bg-black mx-2 p-1 rounded'>
        Skicka
      </button>
    </div>
  );
}