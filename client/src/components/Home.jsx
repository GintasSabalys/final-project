import React from 'react'
import {Link} from 'react-router-dom';
import './Admin/Main.css'

const Home = () => {
  return (
<div className="home">
  <Link className='products' to="/Products">Products</Link>
  <br/>
      <div className='adminLink'>
          <Link className="link" to={`/admin`}>
                <h1 className='admin'>ADMIN</h1>
          </Link>
      </div>
    </div>
  );
};

export default Home