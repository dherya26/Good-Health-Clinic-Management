import React from "react";
import "./BenefitsSection.css";

const BENEFITS = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><path d="M20 30v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2"/><path d="M20 20v-2a4 4 0 0 1 8 0v2"/><path d="M24 24v2"/><circle cx="20" cy="25" r="1"/><circle cx="28" cy="25" r="1"/></g></svg>
    ),
    title: "Make Your Practice Digitally Smart",
    desc: (
      <>
        No more paperwork is needed to manage your practice. All reports including prescriptions can be managed within the software and can be <b>shared via WhatsApp, sms and email</b>
      </>
    ),
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><rect x="20" y="14" width="8" height="6" rx="2"/><path d="M24 20v-6"/></g></svg>
    ),
    title: "Get More Appointments Along With Patient Management Software",
    desc: (
      <>
        10 million+ Patients are looking for doctors online to book their appointment. We will make your <b>clinic live on India's most visited platforms like, NetMeds, My Jio App, and Jio Mart</b> to get more exposure for your clinical practice
      </>
    ),
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><path d="M20 30v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2"/><path d="M24 24v2"/><circle cx="20" cy="25" r="1"/><circle cx="28" cy="25" r="1"/></g></svg>
    ),
    title: "Queueless Practice",
    desc: (
      <>
        Good Health offers hassle free appointment management tool for smooth operation. Patients can book an appointment online & doctors can attend to patients using <b>inbuilt chat, audio & video modes of communication</b>
      </>
    ),
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><rect x="20" y="14" width="8" height="6" rx="2"/><path d="M24 20v-6"/></g></svg>
    ),
    title: "Tailor Made Software",
    desc: (
      <>
        We understand that every speciality needs different features, thus we offer fully <b>customised EMR solutions for 50+ specialities</b>
      </>
    ),
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><rect x="20" y="14" width="8" height="6" rx="2"/><path d="M24 20v-6"/></g></svg>
    ),
    title: "3C Register- Manage Bills Without An Accountant",
    desc: (
      <>
        No worries about any human errors in the bills. No need to rush to an accountant carrying tons of bills and physical files. Just <b>a few clicks and you will have your reports ready</b>
      </>
    ),
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><rect x="20" y="14" width="8" height="6" rx="2"/><path d="M24 20v-6"/><path d="M20 26h8"/><path d="M20 30h8"/></g></svg>
    ),
    title: "Daily Reports",
    desc: (
      <>
        To analyse your practice's growth you can get an <b>MIS report</b> whenever you want
      </>
    ),
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#f5f6fa"/><g stroke="#444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="20" width="16" height="10" rx="2"/><rect x="20" y="14" width="8" height="6" rx="2"/><path d="M24 20v-6"/><rect x="22" y="26" width="4" height="6" rx="1"/><rect x="20" y="32" width="8" height="2" rx="1"/></g></svg>
    ),
    title: "Digital Payment",
    desc: (
      <>
        Payment integration with the most trusted <b>256 Bit security gateway</b>
      </>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">
        How Good Health <span className="benefits-highlight">Benefits Your Practice</span>
      </h2>
      <div className="benefits-cards">
        {BENEFITS.map((b, i) => (
          <div className="benefit-card" key={i}>
            <div className="benefit-icon">{b.icon}</div>
            <div className="benefit-title">{b.title}</div>
            <div className="benefit-desc">{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 