import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {

      return (
        <div className='Auth'>
            <p>Register page</p>
            <form>
                <input required type='text' placeholder='name'/>
                <input required type='text' placeholder='lastname'/>
                <input required type='password' placeholder='password'/>
                <input required type='email' placeholder='email'/>
                <button>Register</button>
                <span>Have account? <Link to='/Login'>Login</Link></span>
            </form>
        </div>
    )
}
export default Register