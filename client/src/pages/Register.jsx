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
        <div className='bgRegister'>
          <div className='AuthRegister'>
            <form className='controlersRegister'>
              <p className='titleRegister'>Register</p>
                <div  className='inputPlaceholder'>
                    <input required type='text' placeholder='Name' name='name' onChange={handleChange}/>
                 </div>
                <div  className='inputPlaceholder'>
                    <input required type='text' placeholder='Lastname' name='lastname' onChange={handleChange}/>
                </div>
                <div  className='inputPlaceholder'>
                    <input required type='password' placeholder='Password' name='password' onChange={handleChange}/>
                </div>
                <div className='inputPlaceholder'>
                    <input required type='email' placeholder='Email' name='email' onChange={handleChange}/>
                </div>
                <div className='inputPlaceholder'>
                    <button className='Register' onClick={handleSubmit}>REGISTER</button>
                </div>
                    {err && <p className='registerError'>{err}</p>}
                <div className="alert">
                    <span className="alert">Have account? <Link className='linktoRegister' to='/Login'>Login</Link></span>
                </div>
            </form>
          </div>
        </div>
    )
}
export default Register