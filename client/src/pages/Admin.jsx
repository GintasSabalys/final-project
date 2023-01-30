
import '../components/Admin/Admin.css'
import React from 'react';
import { AddCategory } from '../components/Admin/AddCategory';
import { AddProduct } from '../components/Admin/AddProduct';

 export const Admin = () => {
    return (
        <div className="addbg">
          <div className='addcontrol'>
            <AddProduct />
            <AddCategory />
          </div>
        </div>
      )

}

export default Admin;
