import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../components/styleLogin.css'

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
        const result = await axios.post("http://localhost:3005/server/auth/login", inputs);
        localStorage.setItem('jwt', result.data.jwt);
        console.log(result)
        console.log(result.data.jwt)
        console.log(result.data.role)
        navigate('/')
      } catch (err) {
        setError(err.response.data);
      }
      
    };

return (
  <div className="bg">
    <div className='Auth'>
        <p className="titleLoginPage">Login</p>
        <form className="controlers">
            <input required type='text' placeholder='email' name='email' onChange={handleChange}/>
            <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
            <button className="submitLogin" onClick={handleSubmit}>Login</button>
            {err && <p className="loginError">{err}</p>}
            <span className="buttom">Don't have an account? <Link className="linktologin" to='/register'>register</Link></span>
        </form>
    </div>
    </div>
)
}

export default Login