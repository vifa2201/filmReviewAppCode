import React from "react";
import "../styles/SearchResultsList.css"
export const SearchResultsList = ({ results }) => {
    //returnerar resultatet som en lista men bild och titel
    return (
        <div className="results-list bg-darGrey">
         {results.map((result, id) => {
                return <ul key={id}>
                    <li className="flex text-lg">  
                        <a href={`/films/${result._id}`}><img src={`http://localhost:3000/${result.coverImage}`} className="w-14 h-14  mb-2 mx-4"  alt={result.title}  /> 
                         </a> {result.title} {result.year}  </li>  </ul>;
            }) }
        
        </div>
    );
};