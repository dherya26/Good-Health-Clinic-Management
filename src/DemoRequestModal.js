import React from "react";
import "./DemoRequestModal.css";

export default function DemoRequestModal({ open, onClose }) {
  if (!open) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for requesting a demo! Our team will contact you soon.");
  };
  return (
    <div className="demo-modal-overlay">
      <div className="demo-modal">
        <button className="demo-modal-close" onClick={onClose}>&times;</button>
        <h2 className="demo-modal-title">Schedule A Free Demo</h2>
        <div className="demo-modal-subtitle">Our Sales Team will Call you in next 12 hours.</div>
        <form className="demo-modal-form" onSubmit={handleSubmit}>
          <div className="demo-modal-input-group">
            <input type="text" placeholder="Doctor name" />
            <span className="demo-modal-input-icon">👤</span>
          </div>
          <div className="demo-modal-input-group">
            <input type="text" placeholder="Contact no. without 0 and +91" />
            <span className="demo-modal-input-icon">📞</span>
          </div>
          <div className="demo-modal-input-group">
            <input type="text" placeholder="Your Speciality" />
            <span className="demo-modal-input-icon">💼</span>
          </div>
          <button className="demo-modal-btn" type="submit">Request For Demo</button>
        </form>
      </div>
    </div>
  );
} 