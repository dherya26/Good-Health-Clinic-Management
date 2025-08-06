import React from "react";
import "./MobileAppSection.css";

const FEATURES = [
  "Access your virtual clinic in one-tap",
  "High quality video consultations",
  "Enhanced patient retention with follow up reminders & updates",
  "Manage clinic calendar with an appointment scheduler",
  "Send digital prescription to patients via SMS/WhatsApp",
  "Experience the next-gen full-fledged EMR on your smartphone"
];

export default function MobileAppSection() {
  return (
    <section className="mobile-app-section">
      <div className="mobile-app-content">
        <div className="mobile-app-image">
          <img 
            src="/mobilepic.png" 
            alt="Good Health Mobile App" 
            className="phone-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x600/3bb6e3/ffffff?text=Mobile+App";
            }}
          />
        </div>
        <div className="mobile-app-features">
          <h2 className="mobile-app-title">
            Good Health The Smartest <span>Patient Management Software</span>,<br />Now On Your Smartphone
          </h2>
          <ul className="feature-list">
            {FEATURES.map(f => (
              <li key={f}><span className="checkmark">✔</span> {f}</li>
            ))}
          </ul>
          <div className="app-store-buttons">
            <button type="button" className="store-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </button>
            <button type="button" className="store-btn">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 