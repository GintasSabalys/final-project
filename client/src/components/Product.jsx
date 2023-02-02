import { useState } from "react";
import '../pages/Products'

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
  return (
<div className="all-products">
  <div className="container-product">
    <div className="itemProduct">
      <div className="infoProduct">
      <p className="titeProduct">{product.title}</p>
      <p>Kaina: {product.price} &#8364;</p>
      <p>Formatas: {product.format}</p>
      <p>Statusas: {product.status}</p>
      <p>Įrašų kompanija: {product.recordcompany}</p>
      <p>Išleidimo data: {product.releasedate}</p>
      </div>
      <div className="img">
      <img className="image-product" src={product.img} alt="img"/>
      </div>
      <div className="button-product">
      <button className="controlers" onClick={handleMinus}>-</button>
      <span className="count">{productCount} vnt.</span>
      <button className="controlers" onClick={handlePlus}>+</button>
      <button className="controlers" onClick={handleAddToCart}>Įdėti į krepšelį</button>
      </div>
    </div>
  </div>
</div>
)
}

export default Product;