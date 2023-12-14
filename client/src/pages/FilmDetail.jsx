// FilmDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

  if (!film) {
    return <p>Laddar...</p>;
  }

  return (

        <>
            <main className="bg-darkGrey flex justify-center items-center w-full ">
                <div className="container mx-auto flex flex-col md:flex-row items-center">

                    {/* Höger kolumn med bild och text */}
                    
                    <div className="md:w-1/2 p-8 text-center">
                        <img src={`http://localhost:3000/${film.coverImage}`}  className="w-72 mx-auto" alt="" />
                    </div>

                    {/* Vänster kolumn med text */}
                    <section className="md:w-1/2 p-4">
                        <h1 className='text-5xl font-bold'>{film.title}</h1>
                        <p className=' my-2'>Under rubrik</p>
                        <div className="stars my-2">
                    
                            <strong> 7.5</strong>/10<br /> 100 recensioner
                        </div>
                        <div><p className='font-bold text-1xl mb-2'>Recensera filmen:
                  
                        </p></div>
                        <p>
                        {film.description}
                        </p>


                    </section>
                </div>

            </main>

            </>
  );
}