// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/CSS/AboutPage.css';

const AboutPage = () => {
  return (
    <div>
    
    <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to Zenith Yoga, your dedicated space for physical, mental, and spiritual well-being through the practice of yoga. At Zenith Yoga, we believe in fostering a supportive community where individuals can embark on their journey to holistic health and self-discovery.
        </p>

        <p>
          Our mission is to provide a nurturing environment that encourages individuals of all ages and backgrounds to explore the transformative power of yoga. Through a variety of classes, workshops, and events, we aim to cater to the unique needs and goals of each practitioner.
          </p>

          <p>
          Whether you are a beginner or an experienced yogi, our experienced instructors are here to guide you on your path to wellness. Join us at Zenith Yoga and embark on a journey to a balanced and harmonious life.
        </p>
      </div>
      <Link to="/home">
        <button className="back-to-home-btn">back home</button>
      </Link>

      </div>
      );
    };

export default AboutPage;
