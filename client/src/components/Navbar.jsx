import React, { useContext } from 'react';
import { UserContext} from '../components/UserContext'
import {Link} from 'react-router-dom';
import Vynilinfo from './VynilInfo'
import '../components/Navbar.css'


const Navbar = () => {
    const msg = useContext(UserContext);

    return (
        <div>
            <div className='navbar'>
                <div className='containerNav'>
                    <nav className='linksNav'>
                        <li>
                        <Link className='link' to='/?cat=PAGRINDINIS'><h4>PAGRINDINIS</h4></Link>
                        </li>
                        <li>
                        <Link className='link' to='/?cat=PARDUOTUVĖ'><h4>PARDUOTUVĖ</h4></Link>
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
                    </nav>
                        <h2>Navbar</h2>
                            <div>{msg}</div>
                            <div className='logo'>logo</div>
                        <Vynilinfo/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;