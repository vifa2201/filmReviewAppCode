
import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function FilmList() {
    return (
        <>
        
        <section className="bg-grey p-4">
    <div className="container">
        <h3 className='mb-4'>Populära denna vecka</h3>
        <div className="grid grid-cols-2 ">
            <div className="table-responsive ">
            <table class="w-full text-sm text-left rtl:text-right border-spacing-2 ">
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
        </div>
    </div>
</section>
        </>
    )
}