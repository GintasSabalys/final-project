import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {

const vynils = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      desc: "Lorem, ipsum dolor sit amet",
      img: "https://vinyloteka.lt/wp-content/uploads/2023/01/R-4016938-1352544210-8550.jpeg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem, ipsum",
      img: "https://vinyloteka.lt/wp-content/uploads/2023/01/R-3091649-1628254544-3927.jpeg",
    }
]

  return (
<div className="home">
  <Link to="/Products">Products</Link>
  <br/>
  <Link to="/Login">Login</Link>
      <div className="vynils">
        {vynils.map((vynil) => (
          <div className="vynil" key={vynil.id}>
            <div className="img">
              <img src={vynil.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/vynil/${vynil.id}`}>
                <h1>{vynil.title}</h1>
              </Link>
              <p>{vynil.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div>
          <Link className="link" to={`/admin`}>
                <h1 className='color: red'>ADMIN</h1>
          </Link>
      </div>
    </div>
  );
};

export default Home
