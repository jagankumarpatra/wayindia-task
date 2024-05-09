// About.js
import React from 'react';
import './About.css';
import logo from '../images/logo.png';
import ceo from '../images/ceo.jpeg'
import tl from '../images/tl.jpeg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate=useNavigate();
  return (
    <div className="about-container">
      <div className="about-header">
       
        <Link to="/"> <img src={logo} style={{width:"300px"}} /></Link>
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <h2>Our Story-WayIndia</h2>
        <p>WAYINDIA is a global information technology company which provides Enterprise services to clients globally and end-to-end business solutions that leverage technology. We provide solutions for a dynamic environment where business and technology strategies converge. .</p>
        <h2>Our Mission</h2>
        <p>Our mission is to provide solutions for a dynamic environment where business and technology strategies converge. Our approach focuses on new ways of business combining IT.</p>
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={ceo} alt="Team Member 1" />
            <h3>Debadatta Behera</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={tl} alt="Team Member 2" />
            <h3>Kalyani Mam</h3>
            <p>Web Developer</p>
          </div>
         
        </div>
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to contact us at <a href="mailto:info@wayindia.com">info@wayindia.com</a>.</p>
      </div>
    </div>
  );
}

export default About;
