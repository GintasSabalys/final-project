import { Link } from 'react-router-dom';
import apiClient from '../clients/ApiClient';
import '../components/Admin.css'
import React, { useState } from 'react';

 export const Admin = () => {
    const [showProductAdded, setShowProductAdded] = useState(false);
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productTitle, setProductTitle] = useState('');
    const [productFormat, setProductFormat] = useState('');
    const [productStatus, setProductStatus] = useState('');
    const [productRecordCompany, setProductRecordCompany] = useState('');
    const [productReleaseDate, setProductReleaseDate] = useState(0);
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const AddNewProduct = async () => {
        console.log(apiClient)
        apiClient.post('/server/products', {
            category: productCategory,
            price: productPrice,
            title: productTitle,
            format: productFormat,
            status: productStatus,
            recordcompany: productRecordCompany,
            releasedate: productReleaseDate,
            productImg: showProductAdded
        }).then(() => {
            setShowProductAdded(true);
            setTimeout(() => setShowProductAdded(false), 5000);
        });

    }

    const HandleCategoryChange = (e) => {
        setProductCategory(e.target.value)
    }

    const HandlePriceChange = (e) => {
        setProductPrice(e.target.value)
    }
    
    const HandleTitleChange = (e) => {
        setProductTitle(e.target.value)
    }

    const HandleFormatChange = (e) => {
        setProductFormat(e.target.value)
    }

    const HandleStatusChange = (e) => {
        setProductStatus(e.target.value)
    }

    const HandleRecordCompanyChange = (e) => {
        setProductRecordCompany(e.target.value)
    }

    const HandleRecordReleaseDate = (e) => {
        setProductReleaseDate(e.target.value)
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('foult');
        };
    };

    const uploadImage = async (img) => {
        console.log(img)
        try {
            await fetch('/http://http://localhost:3000/Products', {
                method: 'POST',
                body: JSON.stringify({ data: img }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="addbg">
          <div className='addcontrol'>
              <p className="titleLoginPage">Admin page</p>
              <form className="controlers">
                  <input type='text' placeholder='Product Category' name='Product' onChange={HandleCategoryChange}/>
                  <input type='text' placeholder='Price' name='Price' onChange={HandlePriceChange}/>
                  <input type='text' placeholder='Title' name='Title' onChange={HandleTitleChange}/>
                  <input type='text' placeholder='Format' name='Format' onChange={HandleFormatChange}/>
                  <input type='text' placeholder='Status' name='Status' onChange={HandleStatusChange}/>
                  <input type='text' placeholder='Record Company' name='Record Company' onChange={HandleRecordCompanyChange}/>
                  <input type='text' placeholder='Release date' name='Release date' onChange={HandleRecordReleaseDate}/>
                  <input type='file' className='file' name='image' onChange={handleFileInputChange} value={fileInputState}/>
                  <button className="submitLogin" type='submit' onClick={AddNewProduct}>Add</button>
                  {showProductAdded && <span color='green'>Product was added successfully</span>}
                  <div className='linktoproducts'>
                  <Link to="/Products">Products</Link>
                  </div>
              </form>
              {previewSource && (<img src={previewSource} alt="img" style={{ height: '300px' }} /> )}
          </div>
          </div>
      )

}

export default Admin;
