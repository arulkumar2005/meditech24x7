import React, { useState, useEffect } from 'react';
import './StoreDetails.css';
import Navbar from './Navbar';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';

const StoreDetails = () => {
  const [stores, setStores] = useState([]);
  const [newStore, setNewStore] = useState({
    storeName: '',
    stock: '',
    orders: '',
    location: '',
    contact: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'stores'));
        const storesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStores(storesData);
      } catch (err) {
        console.error("Error fetching stores:", err);
      }
    };
    
    fetchStores();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore({ ...newStore, [name]: value });
  };

  const addStore = async () => {
    if (!newStore.storeName || !newStore.stock || !newStore.orders || !newStore.location || !newStore.contact) {
      setError('All fields are required.');
      return;
    }

    try {
      const docRef = await addDoc(collection(firestore, 'stores'), {
        ...newStore,
        stock: Number(newStore.stock), 
        orders: Number(newStore.orders),
      });
      setStores([...stores, { id: docRef.id, ...newStore }]);
      setNewStore({
        storeName: '',
        stock: '',
        orders: '',
        location: '',
        contact: '',
      });
      setError('');
    } catch (err) {
      console.error("Error adding store:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete from Firestore
      await deleteDoc(doc(firestore, 'stores', id));
      
      // Update state
      setStores(stores.filter((store) => store.id !== id));
    } catch (err) {
      console.error("Error deleting store:", err);
    }
  };

  return (
    <div className="store-details">
      <div>
        <Navbar />
      </div>
      <h2>Store Details</h2>
      <div className="add-store-form">
        <input
          type="text"
          name="storeName"
          placeholder="Store Name"
          value={newStore.storeName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newStore.stock}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="orders"
          placeholder="Orders"
          value={newStore.orders}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newStore.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={newStore.contact}
          onChange={handleInputChange}
        />
        <button onClick={addStore}>Add Store</button>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="store-list">
        <div className="store-header">
          <div className="store-column">Store Name</div>
          <div className="store-column">Stock</div>
          <div className="store-column">Orders</div>
          <div className="store-column">Location</div>
          <div className="store-column">Contact</div>
          <div className="store-column">Action</div>
        </div>
        {stores.map((store) => (
          <div key={store.id} className="store-item">
            <div className="store-column">{store.storeName}</div>
            <div className="store-column">{store.stock}</div>
            <div className="store-column">{store.orders}</div>
            <div className="store-column">{store.location}</div>
            <div className="store-column">{store.contact}</div>
            <div className="store-column">
              <button onClick={() => handleDelete(store.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDetails;
