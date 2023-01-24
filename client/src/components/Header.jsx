import React, { useContext } from 'react';
import { UserContext} from '../components/UserContext'

const Header = () => {
    const msg = useContext(UserContext);

    return (
        <div style={{paddingBottom: '50px'}}>
            <h2>Header</h2>
            <div>{msg}</div>
        </div>
    )
}

export default Header;