import { useState } from 'react';
import {Link} from 'react-router-dom';
import apiClient from '../clients/ApiClient';

 export const Admin = () => {
    const [showProductAdded, setShowProductAdded] = useState(false);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);

    const AddNewProduct = () => {
        console.log(apiClient)
        apiClient.post('/server/products', {name: productName, price: productPrice}).then(() => {
            setShowProductAdded(true);
            setTimeout(() => setShowProductAdded(false), 5000);
        });
    }

    const HandleNameChange = (e) => {
        setProductName(e.target.value)
    }

    const HandlePriceChange = (e) => {
        setProductPrice(e.target.value)
    }

    return (
        <div>
            
            <Link to="/Products">Products</Link>
            <p>Admin page</p>
            {showProductAdded && <span color='green'>Product was added successfully</span>}
            <span>
                Product name:
                <input onChange={HandleNameChange} />
            </span>
            <br/>
            <span>
                Product price:
                <input onChange={HandlePriceChange} />
            </span>
            <br/>
            <button onClick={AddNewProduct}>Add</button>
        </div>
    )
}

export default Admin;