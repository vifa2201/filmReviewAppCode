import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export function PopularFilms() {
    return (
        <>
        <section className="bg-grey p-4">
            <div className="container">
                <h2 className='mb-4 mt-6 px-4'>Populära filmer <FontAwesomeIcon icon={faChevronRight} /></h2>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <div>   <img src="./img/image.jpeg" className="w-44 mx-auto" alt="" /></div>
                    <div> <img src="./img/image.jpeg" className="w-44 mx-auto" alt="" /></div>
                    <div> <img src="./img/image.jpeg" className="w-44 mx-auto" alt="" /></div>
                    <div> <img src="./img/image.jpeg" className="w-44 mx-auto" alt="" /></div>
                    <div> <img src="./img/image.jpeg" className="w-44 mx-auto" alt="" /></div>
                </div>
            </div>
            </section>
        </>
    )
}