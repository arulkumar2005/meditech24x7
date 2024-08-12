import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import logoani from "C:\\arul\\meditech\\src\\components\\video\\WhatsApp Video 2024-07-30 at 10.13.19_4067eb61.mp4";
const Home = () => {
  return (
    <div className="home-container">
      <header className="header_hom">
        <div className="button-container">
          <Link to="/signup"><button className="home-btn home-btn-register">Register</button></Link>
          <Link to="/login"><button className="home-btn home-btn-login">Login</button></Link>
        </div>
        <div className="logo-container">
          <video src={logoani} autoPlay muted loop className="logo" />
        </div>
        <h1 className="home_title">Welcome to Meditech 24x7</h1>
      </header>
      <main className="main-content">
        <section className="intro-section">
          <h2 className='hom_about_title'>About Us</h2>
          <p>Meditech 24x7 is dedicated to providing efficient and reliable pharmacy management solutions. Our platform helps pharmacies manage their inventory, track orders, and generate comprehensive reports with ease.</p>
        </section>
        <section className="features-section">
          <div className="feature">
            <h2>Efficient Inventory Tracking</h2>
            <p>Keep track of your medical supplies with real-time updates and alerts.</p>
          </div>
          <div className="feature">
            <h2>Easy Access</h2>
            <p>Access your inventory from anywhere, anytime, with our secure cloud-based system.</p>
          </div>
          <div className="feature">
            <h2>Comprehensive Reports</h2>
            <p>Generate detailed reports and analytics to manage your inventory effectively.</p>
          </div>
        </section>
        <section className="medicines-section">
          <h2>Daily Use Medicines</h2>
          <ul className="medicines-list">
            <li>
              <strong>Paracetamol:</strong> Used to reduce fever and relieve pain.
            </li>
            <li>
              <strong>Ibuprofen:</strong> Used for pain relief, fever reduction, and anti-inflammation.
            </li>
            <li>
              <strong>Aspirin:</strong> Used as an analgesic, antipyretic, and anti-inflammatory drug.
            </li>
            <li>
              <strong>Loratadine:</strong> Used to relieve allergy symptoms.
            </li>
            <li>
              <strong>Omeprazole:</strong> Used to treat acid reflux and stomach ulcers.
            </li>
            <li>
              <strong>Metformin:</strong> Used to treat type 2 diabetes.
            </li>
            <li>
              <strong>Atorvastatin:</strong> Used to lower cholesterol.
            </li>
            <li>
              <strong>Amoxicillin:</strong> Used to treat various bacterial infections.
            </li>
            <li>
              <strong>Losartan:</strong> Used to treat high blood pressure.
            </li>
            <li>
              <strong>Amlodipine:</strong> Used to treat high blood pressure and chest pain.
            </li>
          </ul>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-icons">
            <a href="https://www.facebook.com"><FacebookIcon fontSize="large" /></a>
            <a href="https://www.whatsapp.com"><WhatsAppIcon fontSize="large" /></a>
            <a href="mailto:support@meditech24x7.com"><EmailIcon fontSize="large" /></a>
            <a href="https://www.instagram.com"><InstagramIcon fontSize="large" /></a>
          </div>
        </section>
      </main>
      <footer className="footer_hom">
        <p>© 2024 Meditech 24x7. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
