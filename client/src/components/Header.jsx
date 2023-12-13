
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
//komponent för header

export function Header() {
return (
    <>
       <header className="bg-darkGrey flex justify-center items-center w-full ">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Vänster kolumn med text */}
            <section className="md:w-1/2 p-4">
              <h1 id='hero'>Hero text</h1>
              <p className='font-semibold my-2'>Äventyr / Action</p>
              <div className="stars my-2">
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} />
                <FontAwesomeIcon className='star' icon={faStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                repellat a iure, eum voluptas excepturi facilis vitae itaque quasi
                ut repudiandae magnam dignissimos cupiditate. Modi natus non
                corrupti ipsa deleniti adipisci accusamus, eum suscipit id sapiente
                debitis cupiditate eveniet dolore.
              </p>
            </section>
  
            {/* Höger kolumn med bild och text */}
            <div className="md:w-1/2 p-8 text-center">
              <img src="./img/image.jpeg" className="w-72 mx-auto" alt="" />
            </div>
          </div>
        </header>
    </>
)
}