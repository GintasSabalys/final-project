import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:3000/login';
    }

    return (
        <div>
            <div className='navbar'>
                <div className='containerNav'>
                    <nav className='linksNav'>
                        <li>
                            <Link className='link' to='/?cat=PAGRINDINIS'><h4>PAGRINDINIS</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/products'><h4>PARDUOTUVĖ</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/cart'><h4>KREPŠELIS</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/?cat=PRE-ODER'><h4>PRE-ODER</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/?cat=PASLAUGOS'><h4>PASLAUGOS</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/?cat=LEIDYBA'><h4>LEIDYBA</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/?cat=APIEMUZIKĄ'><h4>APIE MUZIKĄ</h4></Link>
                        </li>
                        <li>
                            <Link className='link' to='/?cat=KONTAKTAI'><h4>KONTAKTAI</h4></Link>
                        </li>
                        <li>
                            <a className='link' onClick={() => logout()}><h4>ATSIJUNGTI</h4></a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;