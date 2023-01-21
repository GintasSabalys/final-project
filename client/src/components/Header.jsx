import React, { useContext } from 'react';
import { UserContext} from '../components/UserContext'

export default function Index() {
    const msg = useContext(UserContext);

    return (
        <div>
            <h2>Header</h2>
            <div>{msg}</div>
        </div>
    )
}