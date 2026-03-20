import React, { useState, useEffect } from "react";
import "./ContactSection.css";

const MESSAGE_MAX = 300;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Auto-dismiss success toast after 4 seconds
  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(false), 4000);
    return () => clearTimeout(timer);
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Real-time filter: allow only digits, max 10 characters
  const handleMobileChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, mobile: digits }));
    if (errors.mobile) {
      setErrors((prev) => ({ ...prev, mobile: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const trimmedName = form.name.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your name";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      newErrors.name = "Name should contain only letters and spaces";
    }

    if (!form.mobile) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length) {
      const firstInvalid = document.querySelector(
        ".input-group.has-error input, .input-group.has-error textarea"
      );
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    setSuccess(true);
    setForm({ name: "", mobile: "", message: "" });
  };

  return (
    <section className="contact-section">
      {success && (
        <div className="contact-toast" role="status" aria-live="polite">
          <span className="contact-toast-icon">✅</span>
          Thank you for contacting us! Our team will connect with you shortly.
        </div>
      )}
      <div className="contact-content">
        <div className="contact-form-area">
          <h2 className="contact-title">Have more questions?</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className={`input-group ${errors.name ? "has-error" : ""}`}>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
              />
              <span className="input-icon">👤</span>
            </div>
            {errors.name && <div className="error-text">{errors.name}</div>}

            <div className={`input-group ${errors.mobile ? "has-error" : ""}`}>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter 10-digit Mobile Number"
                value={form.mobile}
                onChange={handleMobileChange}
                inputMode="numeric"
                maxLength={10}
                aria-invalid={!!errors.mobile}
              />
              <span className="input-icon">📱</span>
            </div>
            {errors.mobile && <div className="error-text">{errors.mobile}</div>}

            <div className={`input-group ${errors.message ? "has-error" : ""}`}>
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                maxLength={MESSAGE_MAX}
                aria-invalid={!!errors.message}
              ></textarea>
            </div>
            <div className="char-count">{form.message.length}/{MESSAGE_MAX}</div>
            {errors.message && <div className="error-text">{errors.message}</div>}

            <button className="contact-btn" type="submit">Ask</button>
          </form>
        </div>
        <div className="contact-image">
          <img
            src="/doctor pic.jpg"
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