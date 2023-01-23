import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return <Navigate to='/login' />
  }

  return <Component {...rest} />
}

export default PrivateRoute

