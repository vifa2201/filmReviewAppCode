
import { AddFilm } from '../components/AddFilm';
import { ManageFilms } from '../components/ManageFilms';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Admin() {
  const [films, setFilms] = useState([]);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  const deleteFilm = (filmId) => {
    // Uppdatera filmlistan efter att filmen har raderats
    setFilms(films.filter(film => film._id !== filmId));
  };

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
      <section className='bg-grey l'>
        <div className="container">
          <h1 className='text-4xl font-bold text-center p-4'>Admin</h1>
        </div>
        <AddFilm onFilmAdded={addFilm} />
        <ManageFilms films={films} onFilmDeleted={deleteFilm} />
      </section>
    </>
  );
}