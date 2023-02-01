import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:3000/login';
    }

    return (
        <div className='body'>
            <div className='header'>
            <div className='logo'>Vyniloteka</div>
                <div className='hamburger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                    <nav className='nav-bar'>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/?cat=PAGRINDINIS'><h4 className='nav-title'>PAGRINDINIS</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/products'><h4 className='nav-title'>PARDUOTUVĖ</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/cart'><h4 className='nav-title'>KREPŠELIS</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/?cat=PASLAUGOS'><h4 className='nav-title'>PASLAUGOS</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/?cat=LEIDYBA'><h4 className='nav-title'>LEIDYBA</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/?cat=APIEMUZIKĄ'><h4 className='nav-title'>APIE MUZIKĄ</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <Link className='link' to='/?cat=KONTAKTAI'><h4 className='nav-title'>KONTAKTAI</h4></Link>
                        </li>
                        <li className='nav-bar-link'>
                            <a href='http://localhost:3000/login' className='link' onClick={() => logout()}><h4 className='nav-title'>ATSIJUNGTI</h4></a>
                        </li>
                    </nav>
            </div>
            <div className='text-vynil'>
                <h1>Apie mus</h1>
                <h2>Vinyloteka – Tavo naujas būdas pirkti muziką vinilo formate. Nesistengiame turėti daugiausia, nesiekiame sukelti į mūsų el. parduotuvę viską, ką turime sandėliuose.</h2>
            </div>
        </div>
    )
}

export default Navbar;