import Navbar from "./Navbar"
import SingleMovie from "./pages/SingleMovie"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import './styles/index.css'; 
import { Route, Routes } from "react-router-dom"


 
 export default function App(){

  return (
    <>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/movies" element={<Movies />} />
          <Route path="/single-movie" element={<SingleMovie />} />
        </Routes>
  
    </>
  )

}
