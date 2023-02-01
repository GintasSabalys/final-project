import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../components/Login/styleLogin.css'

const Login = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });

    const [err,setError] = useState(null)

    const navigate = useNavigate();

  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await axios.post("http://localhost:3005/server/auth/login", inputs)
        localStorage.setItem('jwt', result.data.jwt);
        navigate('/')
      } catch (err) {
        setError(err.response.data);
      }
      
    };

return (
  <div className="bgLogin">
    <div className='AuthLogin'>
        <form className="controlersLogin">
          <p className="titleLogin">Login</p>
          <div className="inputRegister">
            <input required type='text' placeholder='Email' name='email' onChange={handleChange}/>
          </div>
          <div className="inputRegister">
            <input required type='password' placeholder='Password' name='password' onChange={handleChange}/>
          </div>
          <div className="inputRegister">
            <button onClick={handleSubmit} className="login">LOGIN</button>
          </div>
            {err && <p className="loginError">{err}</p>}
          <div className="buttom">
            <div className="alert">
            <span className="alert">Don't have an account? <Link className="linktologin" to='/register'>Register</Link></span>
            </div>
          </div>
        </form>
    </div>
    </div>
)
}

export default Login