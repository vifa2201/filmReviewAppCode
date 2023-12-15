import React, { useState } from 'react';

export function AddFilm() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('genre', genre);
        formData.append('year', year);
        formData.append('description', description);
        formData.append('coverImage', coverImage);

        fetch('http://localhost:3000/films', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('New film added:', data);
                // Återställ formuläret efter att filmen har lagts till
                setTitle('');
                setGenre('');
                setYear('');
                setDescription('');
                setImage(null);
            })
            .catch((error) => {
                console.error('Error adding film:', error);
                alert('Något gick fel. Försök igen senare.');
            });
    };
    return (
        <>

            <section className="bg-grey p-4">
                <div className="container px-4">

                    <h2>Lägg till film:</h2>

                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>

                        {/**Titel */}
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label className="font-bold mb-2 mt-4" htmlFor="filmTitle">
                                    Titel
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none "
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Ange filmens titel"
                                />
                            </div>
                        </div>

                        {/**Genre */}
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="font-bold mb-2 mt-4 " htmlFor="filmGenre">
                                    Genre
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                    type="text"
                                    placeholder="Ange filmens genre"
                                />
                            </div>

                            {/**År */}
                            <div className="w-full md:w-1/2 px-3">
                                <label className="font-bold mb-2 mt-4" htmlFor="releaseYear">
                                    År
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none "
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    type="text"
                                    placeholder="Ange filmens år"
                                />
                            </div>
                        </div>

                        {/**Beskrivning */}
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="font-bold mb-2" htmlFor="filmDescription">
                                    Beskrivning
                                </label>
                                <textarea cols="30" rows="5" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight "
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text"
                                    placeholder="Ange filmens beskrivning"></textarea>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="font-bold mb-2" htmlFor="coverImage">
                                    Bild
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 "
                                    onChange={(e) => setImage(e.target.files[0])}
                                    type="file"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
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