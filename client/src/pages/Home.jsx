
import React from 'react';
import { Header } from '../components/Header'
import { PopularFilms } from '../components/PopularFilms'
import { FilmList } from '../components/FilmList'
export default function Home() {
    return (
      <>
        <Header />
    <PopularFilms />
  
    <FilmList />

  
      </>
  
    )
  }