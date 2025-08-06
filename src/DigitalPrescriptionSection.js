import React from "react";
import "./DigitalPrescriptionSection.css";

export default function DigitalPrescriptionSection({ onDemoClick }) {
  return (
    <section className="digital-rx-section">
      <div className="digital-rx-content">
        <div className="digital-rx-image">
          <img 
            src="/rx prescriptionpic.jpg" 
            alt="Digital Prescription" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x400/3bb6e3/ffffff?text=Digital+Prescription";
            }}
          />
        </div>
        <div className="digital-rx-text">
          <h2 className="digital-rx-title">One Click Digital Prescription</h2>
          <div className="digital-rx-subtitle">Send through WhatsApp, SMS, Email</div>
          <button className="digital-rx-btn" onClick={onDemoClick}>Book for a Demo</button>
        </div>
      </div>
    </section>
  );
} 