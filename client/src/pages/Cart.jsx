import { useState } from "react";
import { useEffect } from "react"
import apiClient from '../clients/ApiClient';
import { CartItem } from "../components/Cart/CartItem";
import '../pages/Cart.css'

export const Cart = () => {
  const [myCart, setMyCart] = useState([]);
  const [amountToPay, setAmmoutToPay] = useState(0);
  const [showCartPaid, setShowCartPaid] = useState(false);

  useEffect(() => {
    apiClient.get(`/server/carts`).then((result) => {
      setMyCart(result.data);
    });
  }, []);

  useEffect(() => {
    if (myCart.length === 0) return;
    let totalSum = 0;

    myCart.forEach(x => {
      totalSum = totalSum + x.total_price;
    });
    setAmmoutToPay(totalSum);
  }, [myCart]);

  const removeItem = (id) => {
    apiClient.delete(`/server/carts/${id}`).then(() => {
      const newCart = myCart.filter(x => x.id !== id);
      setMyCart(newCart);
    });
  }

  const pay = () => {
    apiClient.put(`/server/carts/pay`).then(() => {
      setMyCart([]);
      setShowCartPaid(true);
      setTimeout(() => setShowCartPaid(false), 5000);
    })
  }

  if (showCartPaid) {
    return (
      <div style={{ backgroundColor: 'green' }}>
        Krepšelis apmokėtas
      </div>)
  }

  if (myCart.length === 0) {
    return <h2>Tavo krepšelis tuščias</h2>
  }

  return (
    <div className="cart-item-bg">
      {
        myCart.map((x) => (<CartItem item={x} removeItem={removeItem} />))
      }
      <div className="cart-container-buttom">
        <div className="price">
        Suma: {amountToPay} &#8364;
        </div>
        <div>
          <button className="cart-button-pay" onClick={pay}>APMOKĖTI</button>
        </div>
      </div>
      </div>
  )
}