import React from "react";
import "./LoginModal.css";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-modal-close" onClick={onClose}>&times;</button>
        <h2 className="login-modal-title">Kivi Doc</h2>
        <div className="login-modal-subtitle">Sign in with KiViHealth to get started</div>
        <form className="login-modal-form">
          <div className="login-modal-input-group">
            <input type="email" placeholder="Email Id" />
            <span className="login-modal-input-icon">📧</span>
          </div>
          <div className="login-modal-btn-row">
            <button className="login-modal-btn login-modal-btn-main" type="submit">Continue with Password</button>
            <span className="login-modal-or">or</span>
            <button className="login-modal-btn login-modal-btn-outline" type="button">Sign-In with OTP</button>
          </div>
        </form>
        <div className="login-modal-register">
          Don't have an account? <button type="button" className="register-link">Register</button>
        </div>
      </div>
    </div>
  );
} 