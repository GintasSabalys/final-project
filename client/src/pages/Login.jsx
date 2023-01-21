import React from 'react';
import {Link} from 'react-router-dom';


const Login = () => {

return (
    <div className='Auth'>
        <p>Login page</p>
        <form>
            <input required type='text' placeholder='email'/>
            <input required type='password' placeholder='password'/>
            <button>Login</button>
            <span>Don't have an account? <Link to='/register'>register</Link></span>
        </form>
    </div>
)
}

export default Login