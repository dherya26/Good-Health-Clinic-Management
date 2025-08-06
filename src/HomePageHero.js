import React from "react";
import "./HomePageHero.css";

const HomePageHero = ({ onDemoClick, onLoginClick, onCreateAccountClick }) => {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="hero-logo-group">
          <span className="hero-goodhealth">Good Health</span>
        </div>
        <nav className="hero-nav">
          <span className="hero-phone">📞 +91-93450 85552</span>
          <button className="hero-nav-btn" onClick={onCreateAccountClick}>Create Account</button>
          <button className="hero-nav-btn" onClick={() => alert("Support team will be available soon!")}>Online Support</button>
          <button className="hero-login-btn" onClick={onLoginClick}>Login</button>
        </nav>
      </header>
      <main className="hero-main">
        <div className="hero-image">
          <img 
            src="/clinicpic.png" 
            alt="Clinic Management Dashboard" 
            className="hero-laptop"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x500/3bb6e3/ffffff?text=Clinic+Management+Dashboard";
            }}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          />
        </div>
        <div className="hero-content">
          <h1>Advanced Clinic Management Software</h1>
          <div className="hero-slogan">Good Health Begins with Smart Management.</div>
          <h2>For Your Medical Practice</h2>
          <p>Futuristic Patient Management Software with most advanced technology<br/>
            <b>20,000+ Doctors</b> have made their practice smart with Good Health.
          </p>
          <button className="hero-demo-btn realistic-demo-btn" onClick={onDemoClick}>
            <span role="img" aria-label="demo">🧑‍💻</span> Get Free Demo
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePageHero; 