import Navbar from "./Navbar"
import { useState } from 'react';
import FilmDetail from "./pages/FilmDetail";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"
import './styles/index.css';
import { Route, Routes } from "react-router-dom"
import Reviews from "./pages/Reviews";

import  Login  from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes"
import { AuthProvider } from "./AuthContext";



export default function App() {
  const [user, setUser] = useState({ loggedIn: localStorage.getItem('loggedIn') === 'true' });

  const handleLogin = () => {
    setUser({ loggedIn: true });
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setUser({ loggedIn: false });
  };


  return (

      <>
         <Navbar onLogout={handleLogout} />
        <AuthProvider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        
          <Route path="/films/:id" element={<FilmDetail />} />
          <Route path="/films/:id/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route element={<ProtectedRoutes />} >
             <Route path="/admin" element={<Admin />} />

             </Route>
        </Routes>
        </AuthProvider>
        <Footer />
      </>

  );

}
