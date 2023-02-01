import { useEffect } from "react";
import { useState } from "react";
import apiClient from '../../clients/ApiClient';
import '../Admin/AddProduct.css'

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
  }, [product])

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
    <div className="bd-add-product">
      <p className="title-add-product">Add product</p>
      <div className="controler-add-product">
        <div className="input-add-product">
          <select className="select-stile" onChange={(e) => handleFieldChanges(e, 'categoryId')}>
            {categories.map(x => <option value={x.id}>{x.name}</option>)}
          </select>
        </div>
        <div className="input-add-select">
          <input type='text' placeholder='Kaina' name='Price' onChange={(e) => handleFieldChanges(e, 'price')} />
        </div>
        <div className="input-add-select">
          <input type='text' placeholder='Grupė' name='Title' onChange={(e) => handleFieldChanges(e, 'title')} />
        </div>
        <div className="input-add-select">
          <input type='text' placeholder='Formatas' name='Format' onChange={(e) => handleFieldChanges(e, 'format')} />
        </div>
        <div className="input-add-select">
          <input type='text' placeholder='Statusas' name='Status' onChange={(e) => handleFieldChanges(e, 'status')} />
        </div>
        <div className="input-add-select">
          <input type='text' placeholder='Įrašų kompanija' name='Record Company' onChange={(e) => handleFieldChanges(e, 'recordCompany')} />
        </div>
        <div className="input-add-select">
          <input type='text' placeholder='Išleidimo data' name='Release date' onChange={(e) => handleFieldChanges(e, 'releaseDate')} />
        </div>
        <div className="input-add-select">
          <input type="file" onChange={handleFileChanges} accept="image/jpeg, image/png, image/jpg" />
        </div>
            {previewSource && (<img className="add-img-store" src={previewSource} alt="img"/> )}
        <button className="input-add-select" type='submit' onClick={() => AddNewProduct()}><h3 className="add">PRIDĖTI</h3></button>
            {showProductAdded && <div style={{backgroundColor: 'green'}}>Produktas sėkmingai pridėtas!</div>}
      </div>
    </div>
  );
}