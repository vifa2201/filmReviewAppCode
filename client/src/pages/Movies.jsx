//importerar tillägg och komponenter
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import { LatestFilms } from '../components/LatestFilms';
import { AllFilms } from '../components/Allfilms';
export default function  Movies() {
    return (
        <>
         {/*brödsmulor*/}
           <div className="container">
    <ul class="breadcrumb">
    <li>  <Link to="/"> Hem
        </Link></li>
  <li>Filmer </li>
 
</ul>
</div>
    

        <main className="bg-grey">
            <div className="container">
            <h1 className="pt-12 text-5xl font-bold">Filmer</h1>

            </div>
        

        </main>
        <AllFilms />
      
        </>
 
    )
}