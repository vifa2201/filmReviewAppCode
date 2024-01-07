import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react";
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from "./components/SearchResultsList";
import { Menu, X } from "lucide-react"
import "./styles/navbar.css"

export default function Navbar({ onLogout, isLoggedIn }) {
  //state variebler
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);

//öppnar navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
//navigeringslänkar
  const NavLinks = () => {
    
    return (
      <div className="flex items-center space-x-4 text-lg">
        <CustomLink to="/">Hem</CustomLink>
        <CustomLink to="/films">Filmer</CustomLink>
       {/* skriver ut logga ut + admin om användare är inloggad annars logga in */}
        {isLoggedIn ? (
          <>
             <CustomLink to="/admin">Admin</CustomLink>
            <button onClick={() => { onLogout(); navigate("/"); }}>
              Logga Ut
            </button>
          </>
        ) : (
          <CustomLink to="/login">Logga in</CustomLink>
        )}
      </div>
    );
  };
//returnerar navigeringen
  return (
    <>
      <nav className="nav bg-darkGrey sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between mb-4 mb:mb-1">
        <Link to="/" className="site-title" id="site-title">
          BioBetyg
        </Link>
        <div className=" md:flex flex-grow items-center justify-center">
          <SearchBar setResults={setResults} />
        </div>
        <div className="md:flex items-center hidden">
          <NavLinks />
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className="md:flex hidden">{/* Placeholder för att hålla utrymmet för länkarna på höger sida */}</div>
   
      </nav>
      {isOpen && (
        <div className="md:hidden flex-col items-center space-y-4">
          <NavLinks />
        </div>
      )}
      {/**Listan syns bara om man skrivit något */}
      {results.length > 0 && (
        <div className="search-results-container">
          <SearchResultsList results={results} />
        </div>
      )}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

  )
}