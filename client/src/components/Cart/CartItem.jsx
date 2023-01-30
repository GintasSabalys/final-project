export const CartItem = ({ item, removeItem }) => {
  return (
    <div>
      <img style={{ width: '100px', height: '100px', padding: '5px' }} src={item.img} alt="img" />
      <span style={{ padding: '5px' }}>{item.title}</span>
      <span style={{ padding: '5px' }}>x{item.quantity}</span>
      <span style={{ padding: '5px' }}>Total Price: {item.total_price} eu</span>
      <a style={{ padding: '5px' }} onClick={() => removeItem(item.id)}><h2 style={{cursor: 'pointer', color: 'red'}}>X</h2></a>
    </div>
  )
}