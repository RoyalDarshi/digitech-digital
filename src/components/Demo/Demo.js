import React, { useState } from 'react';
import './Demo.css';

const Demo = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., sending data to a backend)
        alert('Demo request submitted! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose(); // Close modal on submission
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="demo-modal-overlay">
            <div className="demo-modal">
                <button className="demo-modal-close" onClick={onClose}>X</button>
                <div className="demo-modal-content">
                    <h2>Request a Free Demo</h2>
                    <p>Fill out the form below, and one of our representatives will contact you to schedule your free demo.</p>
                    <form onSubmit={handleSubmit} className="demo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>

                        <button type="submit" className="demo-submit-btn">Request Demo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Demo;
