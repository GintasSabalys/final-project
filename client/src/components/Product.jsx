import { useState } from "react";
// import apiClient from "../clients/ApiClient";

const Product = ({ product, addToCard }) => {
  const [productCount, setProductCount] = useState(0);
  
  const handleMinus = () => {
    if (productCount < 1) return;
    setProductCount(productCount - 1);
    
  }
  
  const handlePlus = () => {
    if (productCount > 9) return;
    setProductCount(productCount + 1);
  }

  const handleAddToCart = () => {
    addToCard(product.id, productCount);
    setProductCount(0);
  }
  return (<>
    <div className="item" style={{ paddingTop: '10px' }}>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.format}</p>
      <p>{product.status}</p>
      <p>{product.recordcompany}</p>
      <p>{product.releasedate}</p>
      <img style={{width: '100px', height: '100px'}} src={product.img} alt="img"/>
    </div>
    <>
      <button style={{marginRight: '10px'}} onClick={handleMinus}>-</button>
      <span>{productCount}</span>
      <button style={{marginLeft: '10px'}} onClick={handlePlus}>+</button>
      <button style={{marginLeft: '10px'}} onClick={handleAddToCart}>Add to cart</button>
      {/* <button onClick={addProductToCart}>Add product</button> */}
    </>
  </>)
}

export default Product;