// ContactSection.js
import React, { useState } from 'react';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!validateName(name)) {
            setErrorMessage('Please enter a valid name.');
            return;
        }

        if (!validatePhone(phone)) {
            setErrorMessage('Please enter a valid phone number.');
            return;
        }

        // Proceed with form submission
        alert(`Thank you for your submission, ${name}!`);
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactSection;