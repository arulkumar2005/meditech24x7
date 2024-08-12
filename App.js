import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Inventory from './components/Inventory';
import OrderDetails from './components/OrderDetails';
import StoreDetails from './components/StoreDetails';
import AboutPage from './components/AboutPage';
import MedicinePage from './components/MedicinePage';
import Cart from './components/Cart';
import UserOrderDetails from './components/UserOrderDetails';
import PaymentPage from './components/PaymentPage'; // Import the PaymentPage component
import Home from './components/Home';
import InventoryAnalysis from './components/InventoryAnalysis';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/medicinepage' element={<MedicinePage />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/inventory' element={<Inventory />} />
        <Route exact path='/store' element={<StoreDetails />} />
        <Route exact path='/order' element={<OrderDetails />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/userorderdetails' element={<UserOrderDetails />} />
        <Route exact path='/payment' element={<PaymentPage />} />
        <Route exact path='/analysis' element={<InventoryAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
