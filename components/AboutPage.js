import React from 'react';
import './AboutPage.css';
import UserNavbar from './UserNavbar';

const AboutPage = () => {
  return (
    <div className="about-page">
        <div>
           <UserNavbar/>
        </div>
      <h1>About meditech 24x7</h1>

      <section className="inventory-details">
        <h2>Inventory Details</h2>
        <p>Our platform provides comprehensive inventory management, allowing you to easily track stock levels, manage medical supplies, and ensure timely restocking of essential items.</p>
        <p>Key features include real-time updates, low-stock alerts, and detailed reporting to help streamline your inventory operations.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please feel free to contact us:</p>
        <p>Email: <a href="mailto:meditech@gmail.com">meditech@gmail.com</a></p>
        <p>Phone: 9789562137</p>
      </section>
    </div>
  );
};

export default AboutPage;
