//Pages
import FilmDetail from "./pages/FilmDetail";
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Admin from "./pages/Admin"
import Reviews from "./pages/Reviews";
import  Login  from "./pages/Login";

//Komponenter
import Navbar from "./Navbar"
import Footer from "./components/Footer"

//övrigt
import { useState } from 'react';
import './styles/index.css';
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import { AuthProvider } from "./AuthContext";




export default function App() {
  //state variabel som kollar localstorage om användre är inloggad
  const [user, setUser] = useState({ loggedIn: localStorage.getItem('loggedIn') === 'true' } || { loggedIn: false });

//hanterar inloggning
  const handleLogin = () => {
    setUser({ loggedIn: true });
  };
//hanterar utloggning
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setUser({ loggedIn: false });
  };

//returnerar applikations vyn
  return (

      <>
      <div className="container">    
      <Navbar onLogout={handleLogout} isLoggedIn={user.loggedIn} />
       </div>
        <AuthProvider value={user}>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/films" element={<Movies />} />
          <Route path="/films/:id" element={<FilmDetail />} />
          <Route path="/films/:id/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
           {/* Admin är en skyddad route*/}
          <Route element={<ProtectedRoutes />} >
             <Route path="/admin" element={<Admin />} />

             </Route>
        </Routes>
        </AuthProvider>
        <Footer />
      </>

  );

}
