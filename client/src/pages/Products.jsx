import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../clients/ApiClient';
import Product from '../components/Product';
import '../pages/Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (!selectedCategoryId) return;
        apiClient.get(`/server/products/${selectedCategoryId}`).then((result) => {
            setProducts(result.data);
            console.log(result.data);
        });
    }, [selectedCategoryId])

    useEffect(() => {
        apiClient.get('/server/categories').then((result) => {
            setCategories(result.data);
            setSelectedCategoryId(result.data[0].id);
        })
    }, []);

    const handleSelectChange = (e) => {
        setSelectedCategoryId(e.target.value);
    }

    const addToCart = (id, quantity) => {
        console.log(id, quantity);
        apiClient.post(`/server/carts`, {productId: id, quantity}).then(() => {
            setShowError(false);
        }).catch(() => {
            setShowError(true);
        });
    }

    return (
    <>
        <div className='main-back'>
            <div>
                <Link className='titleProducts' to="/">Atgal į pagrindinį puslapį</Link>
            </div>
                <div className='cardsProducts'>
                    <div className='sellect'>
                        {categories && <select className='sellect-product' onChange={handleSelectChange}>
                        {categories.map(x => <option value={x.id}>{x.name}</option>)}</select>}
                        {products.length === 0 && <h1>Atsiprašome, prekių šia kategorija neturime :/</h1>}
                    </div>
                    <div className='cards-products'>
                        {products.length > 0 && products.map((data) =>
                        <Product product={data} addToCard={addToCart} />)}
                        {showError && <div style={{backgroundColor: 'red'}}>Whoops.. kažkas nepavyko :/</div>}
                    </div>
                </div>
        </div>
    </>
    )
}
export default Products