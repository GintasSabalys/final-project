import { useState } from "react"
import apiClient from '../../clients/ApiClient';
import { Link } from "react-router-dom";

const fieldName = 'name';

export const AddCategory = () => {
  
  const [category, setCategory] = useState(undefined);
  const [showCategoryAdded, setShowCategoryAdded] = useState(false);

  const handleCategoryName = (e) => {
    setCategory({ ...category, [fieldName]: e.target.value });
  }

  const addNewCategory = () => {
    apiClient.post('/server/categories', category).then(() => {
      setShowCategoryAdded(true);
      setTimeout(() => setShowCategoryAdded(false), 5000);
    });
  }
  
  return (
    <>
      <p className="titleLoginPage">Add category</p>
      <input type='text' placeholder='Name' name='category' onChange={handleCategoryName} />
        <button className="submitLogin" type='submit' onClick={addNewCategory}>Add</button>
        {showCategoryAdded && <div style={{backgroundColor: 'green'}}>Category was added successfully</div>}
        <div className='linktoproducts'>
          <Link to="/Products">Products</Link>
        </div>
    </>
  )
}