import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
<div className="home">
  <Link to="/Products">Products</Link>
  <br/>
      <div>
          <Link className="link" to={`/admin`}>
                <h1 className='color: red'>ADMIN</h1>
          </Link>
      </div>
    </div>
  );
};

export default Home