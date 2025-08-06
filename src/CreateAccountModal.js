import React from "react";
import "./CreateAccountModal.css";

export default function CreateAccountModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="create-modal-overlay">
      <div className="create-modal">
        <button className="create-modal-close" onClick={onClose}>&times;</button>
        <h2 className="create-modal-title">Create Account</h2>
        <div className="create-modal-subtitle">Sign up to get started with Good Health</div>
        <form className="create-modal-form">
          <div className="create-modal-input-group">
            <input type="text" placeholder="Doctor Name" />
            <span className="create-modal-input-icon">👤</span>
          </div>
          <div className="create-modal-input-group">
            <input type="text" placeholder="Speciality" />
            <span className="create-modal-input-icon">💼</span>
          </div>
          <div className="create-modal-input-group">
            <input type="text" placeholder="Phone Number" />
            <span className="create-modal-input-icon">📱</span>
          </div>
          <button className="create-modal-btn" type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
} 