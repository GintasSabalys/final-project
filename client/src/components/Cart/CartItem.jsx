import './Cartitem.css'

export const CartItem = ({ item, removeItem }) => {
  return (
    <div className="container-cart">
      <div className='item-cart'>
      <div className="img-cart">
      <img className='img-cart' src={item.img} alt="img" />
      </div>
      <div className="info-cart">
      <span className='title-cart-product' >{item.title}</span>
      <span>{item.quantity} vnt.</span>
      <span className='sum'>Bendra suma: {item.total_price} &#8364;</span>
      </div>
      <button className="controler-cart" onClick={() => removeItem(item.id)}><h2>Pašalinti</h2></button>
      </div>
    </div>
  )
}