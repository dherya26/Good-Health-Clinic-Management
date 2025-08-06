import React, { useState } from "react";
import ClinicManagementModal from "./ClinicManagementModal";
import "./SpecialitySection.css";

const VISIBLE_SPECIALITIES = [
  { name: "General Physician", icon: "🩺" },
  { name: "Pediatrician", icon: "👶" },
  { name: "Gynaecologist", icon: "👩‍⚕️" },
  { name: "ENT Specialist", icon: "👂" },
  { name: "Orthopaedician", icon: "🦴" },
  { name: "Dermatologist", icon: "💊" },
  { name: "Dentist", icon: "🦷" },
  { name: "Ophthalmologist", icon: "👁️" },
];

const EXTRA_SPECIALITIES = [
  "Cardiologist",
  "Neurologist",
  "Urologist",
  "Nephrologist",
  "Psychiatrist",
  "Oncologist",
  "Radiologist",
  "Pulmonologist",
  "Gastroenterologist",
  "Endocrinologist",
  "Rheumatologist",
  "Hematologist",
  "Immunologist",
  "Anesthesiologist",
  "Pathologist",
  "Plastic Surgeon",
  "General Surgeon",
  "Vascular Surgeon",
  "Pediatric Surgeon",
  "Orthodontist",
  "Prosthodontist",
  "Periodontist",
  "Oral Surgeon"
];

export default function SpecialitySection() {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cmsModalOpen, setCmsModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  // Only show extra specialties that match the search and are not visible
  const filteredDropdown = EXTRA_SPECIALITIES.filter(s =>
    s.toLowerCase().includes(search.toLowerCase()) && search.length > 0
  );

  return (
    <section className="speciality-section">
      <h1>Discover What Good Health Can Do<br/>For <span className="highlight">Your Speciality</span></h1>
      <p className="subtitle">Good Health clinic management software is preferred by <b>50+ speciality</b> doctors</p>
      <div className="select-label">● <span>Select Your Speciality</span></div>
      <div className="speciality-cards">
        {VISIBLE_SPECIALITIES.map(s => (
          <div className="speciality-card" key={s.name} onClick={() => { setSelectedSpeciality(s.name); setCmsModalOpen(true); }} style={{ cursor: 'pointer' }}>
            <span className="speciality-icon">{s.icon}</span>
            <span className="speciality-name">{s.name}</span>
          </div>
        ))}
      </div>
      <div className="speciality-search-bar" style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search here for more specialities"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setDropdownOpen(true);
          }}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
        />
        <button className="search-btn" tabIndex={-1}>
          <span role="img" aria-label="search">🔍</span>
        </button>
        {dropdownOpen && filteredDropdown.length > 0 && (
          <ul className="speciality-dropdown">
            {filteredDropdown.map(s => (
              <li key={s} className="speciality-dropdown-item" onMouseDown={() => { setSelectedSpeciality(s); setCmsModalOpen(true); setDropdownOpen(false); }}>{s}</li>
            ))}
          </ul>
        )}
      </div>
      <ClinicManagementModal open={cmsModalOpen} onClose={() => setCmsModalOpen(false)} speciality={selectedSpeciality} />
    </section>
  );
} 