import React, { useContext } from 'react';
import { UserContext} from '../components/UserContext'

const Footer = () => {
    const msg = useContext(UserContext);

    return (
        <div style={{paddingTop: '50px'}}>
            <h2>Footer</h2>
            <div>{msg}</div>
        </div>
    )
}

export default Footer;