import React, { useState } from "react";
import HomePageHero from "./HomePageHero";
import SpecialitySection from "./SpecialitySection";
import BenefitsSection from "./BenefitsSection";
import MobileAppSection from "./MobileAppSection";
import DigitalPrescriptionSection from "./DigitalPrescriptionSection";
import PaymentSection from "./PaymentSection";
import ContactSection from "./ContactSection";
import DemoRequestModal from "./DemoRequestModal";
import LoginModal from "./LoginModal";
import CreateAccountModal from "./CreateAccountModal";
import "./HomePageHero.css";

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
  return (
    <div className="App">
      <HomePageHero 
        onDemoClick={() => setDemoModalOpen(true)} 
        onLoginClick={() => setLoginModalOpen(true)} 
        onCreateAccountClick={() => setCreateAccountModalOpen(true)}
      />
      <SpecialitySection />
      <BenefitsSection />
      <MobileAppSection />
      <DigitalPrescriptionSection onDemoClick={() => setDemoModalOpen(true)} />
      <PaymentSection />
      <ContactSection />
      <DemoRequestModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <CreateAccountModal open={createAccountModalOpen} onClose={() => setCreateAccountModalOpen(false)} />
    </div>
  );
}

export default App;
