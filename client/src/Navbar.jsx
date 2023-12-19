import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({ onLogout }) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title" id="site-title">
        LOGO
      </Link>
      <ul>
        <CustomLink to="/">Hem</CustomLink>
        <CustomLink to="/movies">Filmer</CustomLink>
        <CustomLink to="/single-movie">En film</CustomLink>
    
        <CustomLink to="/login">Login</CustomLink>

    
      </ul>
      <div>
        {onLogout && (
          <button onClick={onLogout}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  )
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