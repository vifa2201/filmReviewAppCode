//importerar tillägg och komponenter
import React from 'react';
import { Header } from '../components/Header'
import { PopularFilms } from '../components/PopularFilms'

import { LatestFilms } from '../components/LatestFilms';

export default function Home() {
    return (
      <>
   


        <Header />
    <PopularFilms />
  
    <LatestFilms />

  
      </>
  
    )
  }