// ProtectedRoutes.jsx
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const isAuth = localStorage.getItem('loggedIn') === 'true';

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;