import Navbar from "./Navbar"

import FilmDetail from "./pages/FilmDetail";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"
import './styles/index.css';
import { Route, Routes } from "react-router-dom"
import Reviews from "./pages/Reviews";
import  Login  from "./pages/Login";



export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="/films/:id/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />


    </>
  )

}
