import styles from "./ContactStyles.module.css";
import React, { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState, // Spread the previous state
      [e.target.name]: e.target.value // Update the specific field
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set the content type to JSON
        },
        body: JSON.stringify(formData),  // Convert the formData to a JSON string
      });
  
      if (response.ok) {
        alert('Message sent!');
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };
  

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="formGroup">
        <label htmlFor="name" hidden>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Name"
          value={formData.name}
          required
        ></input>
        </div>
        <div className="formGroup">
        <label htmlFor="email" hidden>
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        ></input>
        </div>
        <div className="formGroup">
        <label htmlFor="message" hidden>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          onChange={handleChange}
          placeholder="Message" 
          value={formData.message}
          required
        ></textarea>
        </div>
        <input type="submit" className="hoverbtn" value="Submit"></input>
      </form>
    </section>
  );
}

export default Contact;
