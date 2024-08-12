 import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './UserOrderDetails.css';
import UserNavbar from './UserNavbar';
const UserOrderDetails = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; // Retrieve cart from location state

  if (cart.length === 0) {
    return (
      <div className="user-order-details">
        <h1>Order Details</h1>
        <p>Your cart is empty.</p>
        <Link to="/medicinepage">Go to Medicine Page</Link>
      </div>
    );
  }

  // Calculate the total amount
  const totalAmount = cart.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div>
        <UserNavbar/>
    <div className="user-order-details">
        
      <h1>Order Details</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <div className="order-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="order-item-price">Price: ${item.price}</span>
              <span className="order-item-quantity">Quantity: {item.quantity}</span>
              <span className="order-item-total">Total: ${item.totalPrice}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="order-total">
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
      
    </div>
  );
};

export default UserOrderDetails;
