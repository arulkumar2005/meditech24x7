import React, { useState } from 'react';
import './MedicinePage.css';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { firestore, collection, addDoc } from '../firebase';


import img1 from 'C:\\arul\\meditech\\src\\components\\med_img\\1.jpeg';
import img2 from 'C:\\arul\\meditech\\src\\components\\med_img\\2.jpeg';
import img3 from 'C:\\arul\\meditech\\src\\components\\med_img\\3.jpeg';
import img4 from 'C:\\arul\\meditech\\src\\components\\med_img\\4.jpeg';
import img5 from 'C:\\arul\\meditech\\src\\components\\med_img\\5.jpeg';
import img6 from 'C:\\arul\\meditech\\src\\components\\med_img\\06.jpeg';
import img7 from 'C:\\arul\\meditech\\src\\components\\med_img\\7.jpeg';
import img8 from 'C:\\arul\\meditech\\src\\components\\med_img\\08.jpeg';
import img9 from 'C:\\arul\\meditech\\src\\components\\med_img\\09.jpeg';
import img10 from 'C:\\arul\\meditech\\src\\components\\med_img\\010.jpeg';
import img11 from 'C:\\arul\\meditech\\src\\components\\med_img\\011.jpeg';
import img12 from 'C:\\arul\\meditech\\src\\components\\med_img\\012.jpeg';
import img13 from 'C:\\arul\\meditech\\src\\components\\med_img\\013.jpeg';
import img14 from 'C:\\arul\\meditech\\src\\components\\med_img\\014.jpeg';
import img15 from 'C:\\arul\\meditech\\src\\components\\med_img\\015.jpeg';

const MedicinePage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [prescriptionFile, setPrescriptionFile] = useState(null);

  const medicines = [
    { id: 1, name: 'Aspirin', price: 5.99, description: 'Pain reliever', image: img1 },
    { id: 2, name: 'Ibuprofen', price: 7.99, description: 'Anti-inflammatory', image: img2 },
    { id: 3, name: 'Paracetamol', price: 3.99, description: 'Fever reducer', image: img3 },
    { id: 4, name: 'Vitamin C', price: 9.99, description: 'Immune booster', image: img4 },
    { id: 5, name: 'Antibiotic X', price: 12.99, description: 'Broad-spectrum antibiotic', image: img5 },
    { id: 6, name: 'Cough Syrup', price: 6.49, description: 'Relieves cough', image: img6 },
    { id: 7, name: 'Allergy Medicine', price: 8.49, description: 'Relieves allergy symptoms', image: img7 },
    { id: 8, name: 'Digestive Aid', price: 4.79, description: 'Helps with digestion', image: img8 },
    { id: 9, name: 'Pain Relief Gel', price: 10.29, description: 'For topical pain relief', image: img9 },
    { id: 10, name: 'Sleep Aid', price: 7.29, description: 'Helps with sleep', image: img10 },
    { id: 11, name: 'Eye Drops', price: 5.49, description: 'Relieves dry eyes', image: img11 },
    { id: 12, name: 'Nasal Spray', price: 6.99, description: 'Relieves nasal congestion', image: img12 },
    { id: 13, name: 'Anti-Nausea', price: 4.89, description: 'Relieves nausea', image: img13 },
    { id: 14, name: 'Skin Cream', price: 11.49, description: 'For dry skin', image: img14 },
    { id: 15, name: 'Headache Relief', price: 5.59, description: 'Relieves headaches', image: img15 }
  ];

  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === medicine.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          totalPrice: existingItem.totalPrice + medicine.price
        };
        toast.success(`${medicine.name} added to cart!`);
        return updatedCart;
      }
      toast.success(`${medicine.name} added to cart!`);
      return [...prevCart, { ...medicine, quantity: 1, totalPrice: medicine.price }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleOrder = async () => {
    if (!customerId) {
      toast.error('Please enter your mobile number.');
      return;
    }

    try {
      const ordersCollection = collection(firestore, 'orders');
      for (const item of cart) {
        await addDoc(ordersCollection, {
          customerId,
          medicineId: item.id,
          name: item.name,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
          timestamp: new Date(),
          prescriptionFile: prescriptionFile ? prescriptionFile.name : null, // Store the file name or URL
        });
      }
      setCart([]);
      setCustomerId('');
      setPrescriptionFile(null);
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order: ', error);
      toast.error('Failed to place order.');
    }
  };

  return (
    <div className="medicine-page">
      <UserNavbar />
      <div className='medi_move'>
        <header className="medicine-header">
          <h1>Our Medicines</h1>
          <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            placeholder="Enter your mobile no"
            className="customer-id-input"
          />
          <label className="file-label">Doctor Prescription:
          </label>
         
            <input
              type="file"
              onChange={(e) => setPrescriptionFile(e.target.files[0])}
              className="file-input"
            />
          <button onClick={() => setShowCart(!showCart)} className="show-cart-btn">
            {showCart ? 'Hide Cart' : 'Show Cart'}
          </button>
          <button onClick={handleOrder} className='order-btn'>
            Place Order
          </button>
          <Link to="/userorderdetails" state={{ cart }} >
            <button className='medi_hide'>Order Details</button>
          </Link>
        </header>
        {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
        <div className="medicine-list">
          {medicines.length > 0 ? (
            medicines.map((medicine) => (
              <div className="medicine-card" key={medicine.id}>
                <img src={medicine.image} alt={medicine.name} className="medicine-image" />
                <div className="medicine-info">
                  <h2>{medicine.name}</h2>
                  <p>{medicine.description}</p>
                  <div className="medicine-pricing">
                    <span className="medicine-price">${medicine.price}</span>
                  </div>
                  <button className="card-order-btn" onClick={() => addToCart(medicine)}>
                    Order
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No medicines available.</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MedicinePage;
