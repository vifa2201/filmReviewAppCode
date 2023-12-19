import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteFilm } from "./DeleteFilm";

export function ManageFilms({ films, onFilmDeleted }) {
    const [updatedFilms, setUpdatedFilms] = useState([]);
    //variabler för uppdaterin
    const [editFilm, setEditFilm] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
    })
}

const handleCancel = () => {
    setIsEditing(false);
    setEditFilm(null);
  };

  return (
    <>
 <section>
        {isEditing ? (
          <table className="table-auto border">
            <thead>
              <tr>
                <th className="p-2">Titel</th>
                <th className="p-2">Genre</th>
                <th className="p-2">År</th>
                <th className="p-2">Beskrivning</th>
                <th className="p-2">Hantera</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">
                  <input
                     className="text-gray-700"
                    type="text"
                    name="title"
                    value={editFilm.title}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="p-2">
                  <input
                     className="text-gray-700"
                    type="text"
                    name="genre"
                    value={editFilm.genre}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="p-2">
                  <input
                     className="text-gray-700"
                    type="text"
                    name="year"
                    value={editFilm.year}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="p-2">
                  <input
                     className="text-gray-700"
                    type="text"
                    name="description"
                    value={editFilm.description}
                    onChange={handleEditChange}
                  />
                </td>
                <td className="p-2">
                  <button onClick={handleSave}>Spara</button>
                  <button onClick={handleCancel}>Avbryt</button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="table-auto border">
            <thead>
              <tr>
                <th className="p-2">Titel</th>
                <th className="p-2">Genre</th>
                <th className="p-2">År</th>
                <th className="p-2">Beskrivning</th>
                <th className="p-2">Hantera</th>
              </tr>
            </thead>
            <tbody>
              {updatedFilms.map((film, index) => (
                <tr key={index} className="border">
                  <td className="p-2">{film.title}</td>
                  <td className="p-2">{film.genre}</td>
                  <td className="p-2">{film.year}</td>
                  <td className="p-2">{film.description}</td>
                  <td className="p-2">
                    <DeleteFilm onDelete={() => handleDelete(film._id)} />
                    <button
                      onClick={() => startEditing(film)}
                      className="p-1"
                    >
                      Ändra
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}