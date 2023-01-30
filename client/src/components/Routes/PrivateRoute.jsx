import React from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar  from '../Shared/NavBar/Navbar';

const PrivateRoute = ({ ...rest }) => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return <Navigate to='/login' />
  }
  console.log(rest.children);
  return (
    <>
      <Navbar />
        {rest.children}
      <Footer />
    </>

  )
}

export default PrivateRoute

