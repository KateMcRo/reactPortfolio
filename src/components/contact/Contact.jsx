import React, { useState } from 'react';
import bgImg from "../../assets/lt-bg.png";
import selfie from "../../assets/selfie.jpeg";
import "./contact.css";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Invalid email address';
      }
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      try {
        // Send email using EmailJS
        const response = await emailjs.send('contact_service', 'contact_form', {
          from_name: name,
          from_email: email,
          message: message,
        }, 'ovqHd-dml7Q78LFzp');
  
        console.log('Email sent successfully!', response.status, response.text);
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setMessage('Message Sent.');
        setErrors({});
      } catch (error) {
        console.error('Email could not be sent:', error);
      }
    }
  };

  return (
    <div id="contentBox" className='flex container'>
      <div id="leftSide" className="flex column">
        <h1 className="contact">CONTACT<br />ME</h1>
        <div id="formBox" className="flex column">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              className="basic input"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              id="email"
              className="basic input"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <textarea
              id="message"
              className="basic input"
              placeholder="MESSAGE"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="submit basic">SUBMIT</button>
          </form>
        </div>
      </div>
      <div id="rightSide" className="flex container center">
        <img src={bgImg} alt="workspace" className="bgImg roundLR" />
        <div className="overlay">
          <img src={selfie} alt="selfie" className="selfie float" />
        </div>
      </div>
    </div>
  );
}
