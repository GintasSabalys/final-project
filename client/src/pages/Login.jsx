import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });

    const [err,setError] = useState(null)

    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await axios.post("http://localhost:3005/server/auth/login", inputs);
        localStorage.setItem('jwt', result.data.jwt)
        console.log(result)
        navigate('/')
        console.log(err)
      } catch (err) {
        setError(err.response.data);
      }
      
    };

return (
    <div className='Auth'>
        <p>Login page</p>
        <form>
            <input required type='text' placeholder='email' name='email' onChange={handleChange}/>
            <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't have an account? <Link to='/register'>register</Link></span>
        </form>
    </div>
)
}

export default Login