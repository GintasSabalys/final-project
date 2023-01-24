import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../clients/ApiClient';
import Product from '../components/Product';

const Products = () => {
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        apiClient.get('/server/products').then((result) => {
            setProducts(result.data);
        });
    }, [])

    return (
        <>
            <Link to="/">Go to home page</Link>
            {!products && <h1>Unfortunatly there is no products :/</h1>}
            {products && products.map((d) => <Product title={d.title} price={d.price} />
            )}
        </>
    )
}
export default Products
