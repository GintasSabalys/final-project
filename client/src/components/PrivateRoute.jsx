import React from 'react';
import { Navigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar  from './Navbar';

const PrivateRoute = ({ ...rest }) => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return <Navigate to='/login' />
  }
  return (
    <>
      <Navbar />
      <Header />
        {rest.children}
      <Footer />
    </>

  )
}

export default PrivateRoute

