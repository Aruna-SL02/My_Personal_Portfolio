import React from 'react';
//import { Link } from 'react-router-dom';
import './Home.css'; 
import profileImg from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name">Aruna Sampath Liyanaarachchi</h1>
        <h3 className="title">Software Developer & Full-Stack Web Developer</h3>
        
        <p className="bio">
          I design and build <strong> scalable software applications and web solutions </strong> using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href ="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="img-wrapper">
          <img 
            src={profileImg} 
            alt="Aruna Sampath Liyanaarachchi" 
            className="profile-pic" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;