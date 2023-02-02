import { useState } from "react"
import apiClient from '../../clients/ApiClient';
import { Link } from "react-router-dom";
import '../Admin/AddCategory.css';

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
    <div className="add-category-bg">
        <p className="title-category">Pridėti kategoriją</p>
      <div className="controler-category">
      <input className="controler-category" type='text' placeholder='Kategorija' name='category' onChange={handleCategoryName} />
      </div>
      <div className="button-add">
        <button className="add-category" type='submit' onClick={addNewCategory}><p className="add-text">PRIDĖTI</p></button>
      </div>
        {showCategoryAdded && <div style={{backgroundColor: 'green'}}>Kategorija pridėta sėkmingai</div>}
      <div className='linktoproducts'>
          <Link className="link-products" to="/Products">Produktai</Link>
      </div>
    </div>
  )
}