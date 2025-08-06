import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! Our team will connect with you shortly.");
  };
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-form-area">
          <h2 className="contact-title">Have more questions?</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Enter Name" />
              <span className="input-icon">👤</span>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Enter Mobile" />
              <span className="input-icon">📱</span>
            </div>
            <div className="input-group">
              <textarea placeholder="Message" rows={3}></textarea>
            </div>
            <button className="contact-btn" type="submit">Ask</button>
          </form>
        </div>
        <div className="contact-image">
          <img 
            src="/doc pic.png" 
            alt="Doctor" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x500/3bb6e3/ffffff?text=Doctor";
            }}
          />
        </div>
      </div>
    </section>
  );
} 