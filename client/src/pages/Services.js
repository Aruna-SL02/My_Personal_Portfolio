import React from 'react';
import './Services.css';
import { FaLaptopCode, FaDesktop, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Full-Stack Web Development",
      description: "Building scalable, responsive, and dynamic web applications using the MERN Stack (MongoDB, Express, React, Node.js). From backend APIs to frontend magic."
    },
    {
      id: 2,
      icon: <FaDesktop />,
      title: "Software Development",
      description: "Developing robust desktop applications and management systems (Inventory, Sales, POS, LMS) using Java, C#, and SQL databases to streamline business operations."
    },
    {
      id: 3,
      icon: <FaPaintBrush />,
      title: "UI/UX Designing",
      description: "Designing intuitive and visually appealing user interfaces. I focus on user experience, wireframing, and prototyping by using Figma to ensure your product looks as good as it works."
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <p className="services-subtitle">What I can do for you.</p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;