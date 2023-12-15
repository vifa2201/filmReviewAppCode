import React, { Component } from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';




export function ManageFilms() {

    const [films, setFilms] = useState([]);

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

        <section>
            <ul>
                {films.map((film, index) => (
                <li key={index}>{film.title}</li>
                ))}
              
            </ul>
        </section>
     
        </>
    )
}