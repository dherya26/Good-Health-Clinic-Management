import React, { useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  // Add local form state and validation errors
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.mobile.trim()) newErrors.mobile = "Please enter your mobile number";
    if (!form.message.trim()) newErrors.message = "Please enter a message";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) {
      // Focus the first invalid field
      const firstInvalid = document.querySelector(
        ".input-group.has-error input, .input-group.has-error textarea"
      );
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    alert("Thank you for contacting us! Our team will connect with you shortly.");
    // Optional reset after successful submit
    setForm({ name: "", mobile: "", message: "" });
  };

  return (
    <section className="contact-section">
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
                type="text"
                name="mobile"
                placeholder="Enter Mobile"
                value={form.mobile}
                onChange={handleChange}
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
                aria-invalid={!!errors.message}
              ></textarea>
            </div>
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