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
            console.log(result.data)
        });
    }, [])

    return (
        <>
            <Link to="/">Go to home page</Link>
            {!products && <h1>Unfortunatly there is no products :/</h1>}
            {products && products.map((data) =>
             <Product 
             title={data.title} 
             price={data.price} 
             category={data.category} 
             format={data.format} 
             status={data.status} 
             recordcompany={data.recordcompany} 
             releasedate={data.releasedate} 
             productImg={data.productImg}/>
            )}
        </>
    )
}
export default Products