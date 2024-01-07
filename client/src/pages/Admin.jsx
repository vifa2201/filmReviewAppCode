//importerar komponenter och tillägg
import { AddFilm } from '../components/AddFilm';
import { ManageFilms } from '../components/ManageFilms';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Admin() {
  const [films, setFilms] = useState([]);
  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  //metod för att radera film
  const deleteFilm = (filmId) => {
    // Uppdatera filmlistan efter att filmen har raderats
    setFilms(films.filter(film => film._id !== filmId));
  };

  //hämtar filmer
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
  {/**brödsmulor */}
   <div className="container">
    <ul class="breadcrumb">
    <li>  <Link to="/"> Hem
        </Link></li>
  <li>Admin </li>
 
</ul>
</div>
      <section className='bg-grey '>
        <div className="container">
          <h1 className='text-4xl font-bold text-center p-4'>Admin</h1>
          {/**komponent för att lägga till film */}
        <AddFilm onFilmAdded={addFilm} />
         {/**komponent för att  hantera film */}
        <ManageFilms films={films} onFilmDeleted={deleteFilm} />
        </div>
      </section>
      
    </>
  );
}