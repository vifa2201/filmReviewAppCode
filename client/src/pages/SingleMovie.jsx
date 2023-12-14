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
      
        <div className="grid grid-cols-2 ">
            <div className="table-responsive text-center mx-auto">
            <h3 className='mb-4'>Liknande filmer</h3>
            <table class="w-100 text-sm text-left rtl:text-right">
                    <tbody>
                        <tr className="border-b">
                            <th scope="row">1</th>
                            <td scope="row"> <img src="./img/image.jpeg" className="w-12 h-12 mx-auto mb-2" alt="" /></td>
                            <td scope="row"> <strong>Filmens titel</strong> <br /> regissörens namn</td>
                        </tr>
                 
                        <tr className="border-b">
                            <th scope="row">2</th>
                            <td scope="row"> <img src="./img/image.jpeg" className="w-12 h-12 mx-auto mt-4 mb-2" alt="" /></td>
                            <td scope="row"> <strong>Filmens titel</strong> <br /> regissörens namn</td>
                        </tr>

                        <tr className="border-b ">
                            <th scope="row">2</th>
                            <td scope="row"> <img src="./img/image.jpeg" className="w-12 h-12 mx-auto mt-4 mb-2" alt="" /></td>
                            <td scope="row"> <strong>Filmens titel</strong> <br /> regissörens namn</td>
                        </tr>
                   
                    </tbody>
                </table>
            </div>
            <div className='md:w-3/4 p-4'>
                <h3>Användares recensioner</h3>
                <div className="line"></div>
                <div className="review">
               
                    <h4 className='mt-4 mb-2'>Väldigt bra action film</h4>
                    <div>
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                        </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam consequuntur officia iure quasi natus tenetur laudantium sint ex illum.</p>
                <div className="line"></div>

                <div className="review">
               
               <h4 className='mt-4 mb-2'>Helt okej.......</h4>
               <div>
                       <FontAwesomeIcon className='star' icon={faStar} />
                       <FontAwesomeIcon className='star' icon={faStar} />
                 
                   </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam consequuntur officia iure quasi natus tenetur laudantium sint ex illum.</p>
           <div className="line"></div>
           </div>
                </div>
            
                </div>
        </div>
    </div>
</section>
            
              
                
            
        </>
    )
}