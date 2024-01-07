import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteFilm } from "./DeleteFilm";

export function ManageFilms({ films, onFilmDeleted }) {
    const [updatedFilms, setUpdatedFilms] = useState([]);
    //variabler för uppdatering
    const [editFilm, setEditFilm] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

        //state för meddelande
        const [isFilmDeleted, setIsFilmDeleted] = useState(false);
        const [isFilmUpdated, setIsFilmUpdated] = useState(false);

    useEffect(() => {
        setUpdatedFilms(films);
    }, [films]);

    const handleDelete = (filmId) => {
        axios
            .delete(`http://localhost:3000/films/${filmId}`)
            .then(() => {
                console.log("Film deleted:", filmId);
                // Filtrera bort den raderade filmen från updatedFilms
                setUpdatedFilms(updatedFilms.filter(film => film._id !== filmId));
                // Anropa onFilmDeleted för ytterligare åtgärder om det behövs
                onFilmDeleted(filmId);
                    // Sätt isFilmAdded till true för att visa meddelandet
                    setIsFilmDeleted(true);
                    //timer för att skriva ut meddeland: 
                    setTimeout(() => {
                        setIsFilmDeleted(false);
                    }, 3000);
            })
            .catch((err) => console.log(err));
    }
const startEditing = (film) => {
    //startar redigeringsläge
    setEditFilm(film);
    setIsEditing(true);
};

const handleEditChange = (e) => {
    setEditFilm((prevFilm) => ({
        ...prevFilm, [e.target.name]:
        e.target.value,
    }))
}

//uppdaterar filmen
const handleSave = () => {
    axios
    .patch(`http://localhost:3000/films/${editFilm._id}`, editFilm)
    .then((response) => {
        console.log("film uppdaterad", response.data);
        setUpdatedFilms((prevFilms) =>
        prevFilms.map((film) =>
        film._id === editFilm._id ? response.data : film))
        setIsEditing(false);
                // Sätt isFilmAdded till true för att visa meddelandet
                setIsFilmUpdated(true);

                //timer för att skriva ut meddeland: 

                setTimeout(() => {
                    setIsFilmUpdated(false);
                }, 3000);
    })
}
//funktion för avbryt knapp
const handleCancel = () => {
    setIsEditing(false);
    setEditFilm(null);
  };

  return (
    <>
    
    <div className="p-4">
  
    <section className="container px-4 flex justify-center ">
 
  {isEditing ? (
    //skriver ut redigeringsläge
    <div className="sm:-mx-6 lg:-mx-8 overflow-x-auto">
      <div className="inline-block min-w-80 py-2 sm:px-6 lg:px-8">
       
        <table className="min-w-full text-left text-sm font-light table-auto">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th className="px-6 py-4">Titel</th>
              <th className="px-6 py-4">Genre</th>
              <th className="px-6 py-4">År</th>
              <th className="px-6 py-4">Beskrivning</th>
              <th className="px-6 py-4">Hantera</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4">
                <input
                  className="text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  name="title"
                  value={editFilm.title}
                  onChange={handleEditChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <input
                  className="text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  name="genre"
                  value={editFilm.genre}
                  onChange={handleEditChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <input
                  className="text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  name="year"
                  value={editFilm.year}
                  onChange={handleEditChange}
                />
              </td>
              <td className="break-all px-6 py-4">
                <textarea
                  className="text-gray-700 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  name="description"
                  value={editFilm.description}
                  onChange={handleEditChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded mr-2"
                >
                  Spara
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-1 rounded"
                >
                  Avbryt
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    //vanligt läge
    <div className="sm:-mx-6 lg:-mx-8 overflow-x-auto">
      <div className="inline-block  py-2 sm:px-6 lg:px-8">
    
        <div className="overflow-hidden">
        {isFilmDeleted && (
            <div className='bg-red-400 p-2 mb-4 rounded'>
                Film raderad
            </div>
        )}
          {isFilmUpdated && (
            <div className='bg-blue-500 p-2 mb-4 rounded'>
                Film uppdaterad
            </div>
        )}
          <table className="min-w-80 text-left text-sm font-light">
            
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Titel</th>
                <th className="px-6 py-4">År</th>
                <th className="px-6 py-4">Genre</th>
                <th className="px-6 py-4">Beskrivning</th>
                <th className="px-6 py-4">Hantera</th>
              </tr>
            </thead>
            <tbody>
              {updatedFilms.map((film, index) => (
                <tr key={index} className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                  <td className="whitespace-nowrap px-6 py-4">{film.title}</td>
                  <td className="whitespace-nowrap px-6 py-4">{film.year}</td>
                  <td className="whitespace-nowrap px-6 py-4">{film.genre}</td>
                  <td className="whitespace-nowrap px-6 py-4">{film.description}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <DeleteFilm onDelete={() => handleDelete(film._id)} />
                    <button onClick={() => startEditing(film)} className="p-1 mx-2 bg-black rounded">
                      Ändra
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )}
</section>
      </div>
      
    </>
  );
}