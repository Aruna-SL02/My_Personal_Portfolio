import React, { useState } from 'react';
import axios from 'axios'; // 1. IMPORT AXIOS
import './Contact.css';

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. NEW: State to handle the sending status (sending, success, error)
  const [status, setStatus] = useState(''); 

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. UPDATED: Handle form submission (Send to Backend)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page from reloading
    setStatus('sending'); // Change button text to "Sending..."

    try {
      // --- THE CONNECTION TO YOUR SERVER ---
      // We send the data to the route we created in server.js
      await axios.post('http://localhost:5000/api/contact', formData);
      
      // If successful:
      setStatus('success');
      alert("Message Sent Successfully! ✅");
      
      // Clear the form so they can write another one
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
      alert("Failed to send message. Please try again. ❌");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange} 
              required
            ></textarea>
          </div>

          {/* 4. UPDATED BUTTON: Changes text while sending and disables itself */}
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;