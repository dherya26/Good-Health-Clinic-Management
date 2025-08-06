import React from "react";
import "./PaymentSection.css";

export default function PaymentSection() {
  return (
    <section className="payment-section">
      <div className="payment-content">
        <div className="payment-text">
          <h2 className="payment-title">
            No More Human Error <span>During Bill Payment</span>
          </h2>
          <div className="payment-subtitle">
            Automated messages are sent to the doctor and the patient after an appointment is booked at the clinic/hospital & the payment is confirmed
          </div>
          <button type="button" className="payment-link">● Pay with KiviPay</button>
        </div>
        <div className="payment-image">
          <img 
            src="/Untitled design.png" 
            alt="KiviPay Payment" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x400/3bb6e3/ffffff?text=Payment+System";
            }}
          />
        </div>
      </div>
    </section>
  );
} 