import React, { useState } from 'react';

export function AddFilm({ onFilmAdded }) {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setImage] = useState('');

    //state för meddelande
    const [isFilmAdded, setIsFilmAdded] = useState(false);

//funktion för  att hantera formläret
    const handleSubmit = (e) => {
        e.preventDefault();

        //läser in värdet av fälten
        const formData = new FormData();
        formData.append('title', title);
        formData.append('genre', genre);
        formData.append('year', year);
        formData.append('description', description);
        formData.append('coverImage', coverImage);
        //POST förfrågan
        fetch('http://localhost:3000/films', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Återställ formuläret efter att filmen har lagts till
                setTitle('');
                setGenre('');
                setYear('');
                setDescription('');
                setImage(null);
                // Anropa onFilmAdded för att meddela att en ny film har lagts till
                onFilmAdded(data);

                // Sätt isFilmAdded till true för att visa meddelandet
                setIsFilmAdded(true);

                //timer för att skriva ut meddeland: 
                setTimeout(() => {
                    setIsFilmAdded(false);
                }, 3000);
            })
            .catch((error) => {
                console.error('Error adding film:', error);
                alert('Något gick fel. Försök igen senare.');
            });
    };

    return (
        <>

<section className="bg-grey p-4 flex flex-col items-center h-screen">
    <div className="container px-4 lg:w-4/5">

        <h2>Lägg till film:</h2>
        {isFilmAdded && (
            <div className='bg-green-400 p-2 mt-4 mb-4 rounded'>
                Film tillagd!
            </div>
        )}

        <form className="" onSubmit={handleSubmit}>

            {/* Titel */}
            <div className="-mx-3 mb-4">
                <div className="w-full px-3 mb-4">
                    <label className="font-bold mb-2 mt-4" htmlFor="filmTitle">
                        Titel
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2.5 px-4 leading-tight focus:outline-none "
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ange filmens titel"
                    />
                </div>
            </div>

            {/* Genre och År */}
            <div className="flex -mx-3 ">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="font-bold mb-2 mt-2 " htmlFor="filmGenre">
                        Genre
                    </label>
                    <select
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        type="text"
                        required
                        placeholder="Ange filmens genre"
                        
                   >
                    <option value="" disabled>Välj en genre</option>
                    <option value="Komedi">Komedi</option>
                    <option value="Äventyr">Äventyr</option>
                    <option value="Skräck">Kärlek</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Action">Action</option>
                   </select>
                </div>

                {/* År */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="font-bold mb-2 mt-2" htmlFor="releaseYear">
                        År
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2.5 px-4 leading-tight focus:outline-none "
                        value={year}
                        required
                        onChange={(e) => setYear(e.target.value)}
                        type="number"
                        placeholder="Ange filmens år"
                    />
                </div>
            </div>

            {/* Beskrivning */}
            <div className="-mx-3 mb-4">
                <div className="w-full px-3 mb-4">
                    <label className="font-bold mb-2" htmlFor="filmDescription">
                        Beskrivning
                    </label>
                    <textarea
                        cols="30"
                        rows="5"
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-4 leading-tight "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="Ange filmens beskrivning"
                    />
                </div>
            </div>

            {/* Bild */}
            <div className="-mx-3 mb-4">
                <div className="w-full px-3 mb-4">
                    <label className="font-bold mb-2" htmlFor="coverImage">
                        Bild
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2.5 px-4 mb-4 "
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        required
                    />
                </div>
            </div>

            <div className="flex -mx-3 mb-4">
                <div className="w-full px-3">
                    <input className="bg-black py-3 px-4 mb-3 rounded text-white" type="submit" value="Lägg till film" />
                </div>
            </div>
        </form>
    </div>
</section>
</>
    )
}