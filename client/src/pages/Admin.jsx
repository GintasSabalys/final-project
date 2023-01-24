import { useState } from 'react';
import {Link} from 'react-router-dom';
import apiClient from '../clients/ApiClient';
import '../components/Admin.css'

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
        <div className="addbg">
          <div className='addcontrol'>
              <p className="titleLoginPage">Admin page</p>
              <form className="controlers">
                  <input type='text' placeholder='Product name' name='Product' onChange={HandleNameChange}/>
                  <input type='text' placeholder='Price' name='Price' onChange={HandlePriceChange}/>
                  <button className="submitLogin" onClick={AddNewProduct}>Add</button>
                  {showProductAdded && <span color='green'>Product was added successfully</span>}
                  <div className='linktoproducts'>
                  <Link to="/Products">Products</Link>
                  </div>
              </form>
          </div>
          </div>
      )

}

export default Admin;