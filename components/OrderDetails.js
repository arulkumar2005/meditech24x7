import React, { useState, useEffect } from 'react';
import './OrderDetails.css';
import Navbar from './Navbar';
import { firestore, collection, getDocs } from '../firebase';

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(firestore, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-details">
      <Navbar />
      <h2>Order Details</h2>
      <div className="orders-container">
        <div className="order-header">
          <span>Mobile No</span>
          <span>Order ID</span>
          <span>Name</span>
          <span>Quantity</span>
          <span>Total Price</span>
          <span>Timestamp</span>
        </div>
        {orders.map((order) => (
          <div key={order.id} className="order-row">
            <span>{order.customerId}</span> {/* Display Customer ID */}
            <span>{order.medicineId}</span>
            <span>{order.name}</span>
            <span>{order.quantity}</span>
            <span>${order.totalPrice.toFixed(2)}</span>
            <span>{new Date(order.timestamp.seconds * 1000).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
