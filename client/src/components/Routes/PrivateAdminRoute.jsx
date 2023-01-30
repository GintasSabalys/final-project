import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt from 'jwt-decode' 

const PrivateAdminRoute = ({ ...props }) => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return <Navigate to='/login' />
  }
  
  const user = jwt(token);

  console.log(user);
  if (user.role !== 'admin') {
    return <Navigate to='/login' />
  }
  return <>{props.children}</>
}
export default PrivateAdminRoute;