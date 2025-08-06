import React from "react";
import "./ClinicManagementModal.css";

const FEATURES = [
  "Appointment Reminder",
  "OPD Billing",
  "Prescription",
  "Review Integration",
  "Video Consultation",
  "Inventory Management",
  "Online Payment Option",
  "Admission - Discharge Management",
  "IPD Billing",
  "Mediclaim Facility",
  "Discharge Summary",
  "IPD Notes"
];

export default function ClinicManagementModal({ open, onClose, speciality }) {
  if (!open) return null;
  return (
    <div className="cms-modal-overlay">
      <div className="cms-modal cms-modal-split">
        <button className="cms-modal-close" onClick={onClose}>&times;</button>
        <div className="cms-modal-left">
          <ul className="cms-feature-list">
            {FEATURES.map(f => (
              <li key={f}><span className="cms-feature-check">✔✔</span> {f}</li>
            ))}
          </ul>
        </div>
        <div className="cms-modal-right">
          <h2 className="cms-modal-title">Check Free <span className="cms-modal-title-bold">Software</span></h2>
          <hr className="cms-modal-divider" />
          <form className="cms-modal-form">
            <label>Full Name
              <div className="cms-modal-input-group">
                <input type="text" placeholder="Type your name" />
                <span className="cms-modal-input-icon-right">👤</span>
              </div>
            </label>
            <label>Contact No.
              <div className="cms-modal-input-group">
                <input type="text" placeholder="Type your contact no" />
                <span className="cms-modal-input-icon-right">📱</span>
              </div>
            </label>
            <label>Email Id.
              <div className="cms-modal-input-group">
                <input type="email" placeholder="Type your email" />
                <span className="cms-modal-input-icon-right">✉️</span>
              </div>
            </label>
            <button className="cms-modal-btn" type="submit">
              Check Now <span className="cms-modal-btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 