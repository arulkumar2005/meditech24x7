import React, { useState, useEffect } from 'react';
import { firestore, collection, addDoc, deleteDoc, doc, getDocs } from '../firebase';
import './Inventory.css'; 
import Navbar from './Navbar';

export default function Inventory() {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    power: '',
    category: '',
    type: '',
    price: '',
    stock: '',
  });

  // Fetch medicines from Firestore
  const fetchMedicines = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'medicines'));
      const medicinesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMedicines(medicinesList);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  // Add new medicine to Firestore
  const handleAddMedicine = async () => {
    if (Object.values(newMedicine).every(field => field.trim())) {
      try {
        const docRef = await addDoc(collection(firestore, 'medicines'), newMedicine);
        setMedicines([...medicines, { id: docRef.id, ...newMedicine }]);
        setNewMedicine({ name: '', power: '', category: '', type: '', price: '', stock: '' });
      } catch (error) {
        console.error('Error adding medicine:', error);
      }
    } else {
      alert('Please fill out all fields!');
    }
  };

  // Delete medicine from Firestore
  const handleDeleteButton = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'medicines', id));
      setMedicines(medicines.filter(medicine => medicine.id !== id));
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };

  return (
    <div className="inventory-container">
      <div>
        <Navbar />
      </div>
      <h4 className="page-title">Medicine Inventory</h4>
      <div className="add-medicine">
        <h5>Add New Medicine</h5>
        <div className="form-group">
          <input
            type="text"
            placeholder="Medicine Name"
            value={newMedicine.name}
            onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Power"
            value={newMedicine.power}
            onChange={(e) => setNewMedicine({ ...newMedicine, power: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={newMedicine.category}
            onChange={(e) => setNewMedicine({ ...newMedicine, category: e.target.value })}
          />
          <input
            type="text"
            placeholder="Type"
            value={newMedicine.type}
            onChange={(e) => setNewMedicine({ ...newMedicine, type: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newMedicine.price}
            onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Stock"
            value={newMedicine.stock}
            onChange={(e) => setNewMedicine({ ...newMedicine, stock: e.target.value })}
          />
          <button onClick={handleAddMedicine}>Add Medicine</button>
        </div>
      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Medicine Name<sup>Power</sup></th>
            <th>Medicine Category</th>
            <th>Medicine Type</th>
            <th>Medicine Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={medicine.id}>
              <td>{index + 1}</td>
              <td>{medicine.name} <sup>{medicine.power}</sup></td>
              <td>{medicine.category}</td>
              <td>{medicine.type}</td>
              <td>₹{medicine.price}</td>
              <td>{medicine.stock}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteButton(medicine.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
