import React, { useState } from "react";
import "../Styles/Contact.css"; // تأكدي من وجود ملف الـ CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section">
<div className="contact">
          <h2>Contact Me</h2>
        </div>      
        <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>

        <div className="contact-details">
          <div>  
            <h3 className="contact-name">Habiba Amir</h3>
            <p >Embedded Software Developer</p>
          </div>
          <div className="contact-title">
            <p><strong>Phone</strong><br />+2 01012912778</p>
            <p><strong>Email</strong><br /><a href="mailto:habibaamirsaad44@gmail.com">habibaamirsaad44@gmail.com</a></p>
            <p><strong>Website</strong><br /><a href="https://www.Habiba_amir.com" target="_blank" rel="noopener noreferrer">www.Habiba_amir.com</a></p>
          </div>
          {/* Social Icons */}
          <div className="contact-icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
