import React from "react";
import { useEffect, useState } from "react";
import {FaSearch} from "react-icons/fa"

import "../styles/SearchBar.css"
export const SearchBar = ({setResults}) => {
  //state variabel
    const [input, setInput] = useState("")
//hämtar data från filmen
    useEffect(() => {
        const fetchData = (value) => {
          fetch("http://localhost:3000/films")
            .then((response) => response.json())
            .then((json) => {
              //hämtar resultatet och filtrerar beroende på titel
              const results = json.filter((film) => {
                return (value && film && film.title &&
                  film.title.toLowerCase().includes(value)
                );
              });
              setResults(results);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        };
    
        fetchData(input);
      }, [input, setResults]);
    
      const handleChange = (value) => {
        setInput(value);
      };
    //returnerar säkfält
    return <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input id="search" placeholder="Sök efter film" 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}/>
    </div>
}