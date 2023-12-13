import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { PopularFilms } from '../components/popularFilms';

export default function  Movies() {
    return (
        <>
        <main className="bg-grey">
            <div className="container">
            <h1 className="pt-12 text-5xl font-bold">Filmer</h1>

            </div>
        

        </main>
        <PopularFilms />
        <PopularFilms />
        </>
 
    )
}