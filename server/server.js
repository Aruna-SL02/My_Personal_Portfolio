require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer'); 

const Contact = require('./models/Contact');

const app = express();

app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// --- API ROUTES ---
app.get('/', (req, res) => {
  res.send('API is Running...');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // A. Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // B. Send Email Notification (The New Part)
    
    // 1. Setup the Transporter (The Mailman)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      // --- ADD THIS BLOCK TO FIX THE ERROR ---
      tls: {
        rejectUnauthorized: false
      }
    });

    // 2. Configure the Email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER,   // Receiver 
      subject: `New Portfolio Message from ${name}`, // Subject line
      text: `
        You have a new message from your Portfolio!
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // 3. Send the Email
    await transporter.sendMail(mailOptions);
    console.log("📧 Email notification sent successfully!");

    res.status(201).json({ success: 'Message Sent & Saved!' });
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// GET Route (Optional: Read messages)
app.get('/api/contact', async (req, res) => {
  try {
    const allContacts = await Contact.find(); 
    res.json(allContacts); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});