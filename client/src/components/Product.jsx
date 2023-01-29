import { useState } from "react";
// import apiClient from "../clients/ApiClient";

const Product = ({ title, price, category, format, status, recordcompany, releasedate, productImg }) => {
  const [productCount, setProductCount] = useState(0);
  
  const handleMinus = () => {
    if (productCount < 1) return;
    setProductCount(productCount - 1);
    
  }
  
  const handlePlus = () => {
    if (productCount > 9) return;
    setProductCount(productCount + 1);
  }

  // const addProductToCart = () => {
    
    // }
    
    console.log(title)

  return (<>
    <div className="item" style={{ paddingTop: '10px' }}>
      <p>{title}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>{format}</p>
      <p>{status}</p>
      <p>{recordcompany}</p>
      <p>{releasedate}</p>
      <img src={productImg} alt="img"/>
    </div>
    <>
      <button onClick={handleMinus}>-</button><span>{productCount}</span><button onClick={handlePlus}>+</button>
      {/* <button onClick={addProductToCart}>Add product</button> */}
    </>
  </>)
}

export default Product;