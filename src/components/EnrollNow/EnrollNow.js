import React, { useState } from 'react';
import styles from './EnrollNow.module.css';

const EnrollNowModal = ({ isOpen, onClose ,course}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: course,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        console.log(formData);
        alert('Thank you for enrolling!');
        onClose(); // Close the modal after submission
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <header className={styles.header}>
                    <h2>Enroll Now</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </header>

                <section className={styles.enrollmentSection}>
                    <p>Join our Digital Marketing courses and enhance your skills!</p>
                    <form onSubmit={handleSubmit} className={styles.enrollForm}>
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

                        <label htmlFor="course">Select Course</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a course</option>
                            <option value="Digital Marketing Specialist Course">Specialist Course (3 Months+)</option>
                            <option value="Advanced Digital Marketing Course">Professional Course (6 Months)</option>
                            <option value={"Digital Marketing Foundation Course"}>Foundation Course (2 Month)</option>
                            <option value="Ninja Kids">Ninja Kids</option>
                            <option value={"Digital Marketing Master Course "}>Master Course(4.5 Months+)</option>
                            <option value="Annual Digital Marketing Program">Digi Hero (1 Year)</option>
                        </select>

                        <button type="submit" className={styles.submitButton}>
                            Enroll Now
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default EnrollNowModal;
