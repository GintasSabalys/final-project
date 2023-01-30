import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/Register/styleRegister.css'

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
        <div className='bg'>
          <div className='allForm'>
        <div className='Auth'>
            <p className='titleRegister'>Register</p>
            <form className='controlers'>
                <input required type='text' placeholder='name' name='name' onChange={handleChange}/>
                <input required type='text' placeholder='lastname' name='lastname' onChange={handleChange}/>
                <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
                <input required type='email' placeholder='email' name='email' onChange={handleChange}/>
                <button className='buttonRegister' onClick={handleSubmit}>Register</button>
                {err && <p className='registerError'>{err}</p>}
                <span className='battom'>Have account? <Link className='linktologin' to='/Login'>Login</Link></span>
            </form>
        </div>
        </div>
        </div>
    )
}
export default Register