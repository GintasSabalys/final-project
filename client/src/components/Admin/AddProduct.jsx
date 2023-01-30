import { useEffect } from "react";
import { useState } from "react";
import apiClient from '../../clients/ApiClient';

export const AddProduct = () => {
  const [product, setProduct] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [showProductAdded, setShowProductAdded] = useState(false);
  const [previewSource, setPreviewSource] = useState('');

  useEffect(() => {
    apiClient.get('/server/categories').then((result) => {
      setCategories(result.data);
      if (result.data[0]) {
        setProduct({ ...product, categoryId: result.data[0].id})
      }
    });
  }, [])

  const handleFieldChanges = (e, fieldName) => {
    setProduct({ ...product, [fieldName]: e.target.value });
  }

  const AddNewProduct = () => {
    console.log(product)
    apiClient.post('/server/products', product).then(() => {
      setShowProductAdded(true);
      setTimeout(() => setShowProductAdded(false), 5000);
    });
  }

  const handleFileChanges = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProduct({ ...product, image: e.target.result });
      setPreviewSource(e.target.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
      <p className="titleLoginPage">Add product</p>
        <div >
        <select onChange={(e) => handleFieldChanges(e, 'categoryId')} style={{width: '100%'}}>
          {categories.map(x => <option value={x.id}>{x.name}</option>)}
        </select>
        </div>
        <input type='text' placeholder='Price' name='Price' onChange={(e) => handleFieldChanges(e, 'price')} />
        <input type='text' placeholder='Title' name='Title' onChange={(e) => handleFieldChanges(e, 'title')} />
        <input type='text' placeholder='Format' name='Format' onChange={(e) => handleFieldChanges(e, 'format')} />
        <input type='text' placeholder='Status' name='Status' onChange={(e) => handleFieldChanges(e, 'status')} />
        <input type='text' placeholder='Record Company' name='Record Company' onChange={(e) => handleFieldChanges(e, 'recordCompany')} />
        <input type='text' placeholder='Release date' name='Release date' onChange={(e) => handleFieldChanges(e, 'releaseDate')} />
        <input type="file" onChange={handleFileChanges} accept="image/jpeg, image/png, image/jpg" />
        {previewSource && (<img src={previewSource} alt="img" style={{ height: '100px', width: '100px' }} /> )}
        <button className="submitLogin" type='submit' onClick={() => AddNewProduct()}>Add</button>

      {showProductAdded && <div style={{backgroundColor: 'green'}}>Product was added successfully</div>}
    </>
  );
}