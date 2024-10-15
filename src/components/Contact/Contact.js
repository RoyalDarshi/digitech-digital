import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Contact Us</h1>
                <p>Have questions? We're here to help!</p>
            </header>

            <div className={styles.content}>
                <section className={styles.formSection}>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </section>

                <section className={styles.detailsSection}>
                    <h2>Contact Details</h2>
                    <div className={styles.details}>
                        <p><strong>Address:</strong>D9 ground floor,sector 3 noida,gautam buddha Nagar Noida</p>
                        <p><strong>Email:</strong> info@digitechdigital.com</p>
                        <p><strong>Phone:</strong>9120692025</p>
                    </div>
                </section>
            </div>

            <section className={styles.socialMediaSection}>
                <h2>Follow Us</h2>
                <div className={styles.socialMediaLinks}>
                    <a href="https://www.facebook.com/digiperform" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/digiperform" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/company/digiperform" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/digiperform/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
