 
import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="cart-item-price">${item.totalPrice.toFixed(2)}</span>
              <span className="cart-item-quantity">Quantity: {item.quantity}</span>
            </div>
            <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
