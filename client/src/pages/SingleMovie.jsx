import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FilmList } from '../components/FilmList'
export default function SingleMovie() {
    return (
        <>
            <main className="bg-darkGrey flex justify-center items-center w-full ">
                <div className="container mx-auto flex flex-col md:flex-row items-center">


                    {/* Höger kolumn med bild och text */}
                    <div className="md:w-1/2 p-8 text-center">
                        <img src="./img/image.jpeg" className="w-72 mx-auto" alt="" />
                    </div>

                    {/* Vänster kolumn med text */}
                    <section className="md:w-1/2 p-4">
                        <h1 className='text-5xl font-bold'>Film titel</h1>
                        <p className=' my-2'>Under rubrik</p>
                        <div className="stars my-2">
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <strong> 7.5</strong>/10<br /> 100 recensioner
                        </div>
                        <div><p className='font-bold text-1xl mb-2'>Recensera filmen:
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                        </p></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                            repellat a iure, eum voluptas excepturi facilis vitae itaque quasi
                            ut repudiandae magnam dignissimos cupiditate. Modi natus non
                            corrupti ipsa deleniti adipisci accusamus, eum suscipit id sapiente
                            debitis cupiditate eveniet dolore.
                        </p>


                    </section>
                </div>

            </main>
            <section className="bg-grey p-4">
    <div className="container">
        <h3 className='mb-4'>Mer som denna</h3>
        <div className="grid grid-cols-2 ">
            <div className="table-responsive ">
            <table class="w-50 text-sm text-left rtl:text-right border-spacing-2 ">
                    <tbody>
                        <tr className="border-b">
                            <th scope="row">1</th>
                            <td scope="row"> <img src="./img/image.jpeg" className="w-12 h-12 mx-auto" alt="" /></td>
                            <td scope="row"> <strong>Filmens titel</strong> <br /> regissörens namn</td>
                        </tr>
                 
                        <tr className="border-b">
                            <th scope="row">2</th>
                            <td scope="row"> <img src="./img/image.jpeg" className="w-12 h-12 mx-auto" alt="" /></td>
                            <td scope="row"> <strong>Filmens titel</strong> <br /> regissörens namn</td>
                        </tr>

                        <tr className="border-b ">
                            <th scope="row">2</th>
                            <td scope="row"> <img src="./img/image.jpeg" className="w-12 h-12 mx-auto" alt="" /></td>
                            <td scope="row"> <strong>Filmens titel</strong> <br /> regissörens namn</td>
                        </tr>
                   
                    </tbody>
                </table>
            </div>
            <div className='md:w-1/2 p-4'>
                <h3>Användares recensioner</h3>
                </div>
        </div>
    </div>
</section>
            
              
                
            
        </>
    )
}