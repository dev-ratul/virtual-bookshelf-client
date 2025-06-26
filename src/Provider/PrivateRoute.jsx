import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../src/Pages/Shared/Loading';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoute;
