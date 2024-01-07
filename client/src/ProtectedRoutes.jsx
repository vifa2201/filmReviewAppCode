// ProtectedRoutes.jsx
import { Navigate, Outlet } from 'react-router';

//kollar om logged in = true och ger isåfall annars skicas man till login
const ProtectedRoutes = () => {
  const isAuth = localStorage.getItem('loggedIn') === 'true';

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;