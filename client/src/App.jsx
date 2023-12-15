import Navbar from "./Navbar"
import SingleMovie from "./pages/SingleMovie"
import FilmDetail from "./pages/FilmDetail";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"
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
           <Route path="/films/:id" element={<FilmDetail />} />
           <Route path="/admin" element={<Admin />} />
        </Routes>
      <Footer />

  
    </>
  )

}
