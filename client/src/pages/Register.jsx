import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [inputs, setInputs] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
      });

      const [err,setError] = useState(null)

      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3005/server/auth/register", inputs);
          navigate('/login')
          console.log(err)
        } catch (err) {
          setError(err.response.data);
        }
      };

      return (
        <div className='Auth'>
            <p>Register page</p>
            <form>
                <input required type='text' placeholder='name' name='name' onChange={handleChange}/>
                <input required type='text' placeholder='lastname' name='lastname' onChange={handleChange}/>
                <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
                <input required type='email' placeholder='email' name='email' onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Have account? <Link to='/Login'>Login</Link></span>
            </form>
        </div>
    )
}
export default Register