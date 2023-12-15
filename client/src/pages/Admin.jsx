import React from 'react';
import { AddFilm } from '../components/AddFilm';
import { ManageFilms } from '../components/ManageFilms';
export default function Amin(){
    return (
        <>
      <section className='bg-grey l'>
        <div className="container">

        <h1 className='text-4xl font-bold text-center p-4'>Admin</h1>
        </div>
      
<AddFilm />
<ManageFilms />
      </section>
     
        </>
    )

}