
import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function FilmList() {
    return (
        <>
        
        <section className="bg-grey p-4">
    <div className="container px-4">
        <h3 className='mb-4'>Populära denna vecka</h3>
        <div className="table-responsive text-center">
          
            <table className="w-2/5 text-sm text-left rtl:text-right">
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

            
        </div>
</section>
        </>
    )
}