import React from 'react';
import styles from './AnnualProgram.module.css';

const AnnualProgram = () => {
    return (
        <div className={styles.programContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Annual Digital Marketing Program</h1>
                    <p>
                        Join our comprehensive digital marketing program designed to equip you with
                        practical skills and knowledge to thrive in the digital world. The program covers
                        all aspects of digital marketing and is suitable for beginners to professionals.
                    </p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://digiperform.com/wp-content/uploads/2022/03/IMG_2128g.png" alt="Annual Digital Marketing Program" />
                </div>
            </section>

            {/* Program Highlights Section */}
            <section className={styles.highlightsSection}>
                <h2>Why Choose Our Annual Program?</h2>
                <div className={styles.highlightsContainer}>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Marketing-Digital-Marketing-Functions.png" alt="Hands-on Training" />
                        <h3>Hands-on Training</h3>
                        <p>Get practical exposure with real-world projects.</p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Digital-Marketing-Industrial-Applications.png" alt="Certification" />
                        <h3>Industry Certification</h3>
                        <p>Earn recognized certifications that boost your career prospects.</p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Web-Research-Surveys-Management.png" alt="Job Placement Assistance" />
                        <h3>Job Placement Assistance</h3>
                        <p>Benefit from our 100% job assistance services to help you land your dream job.</p>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className={styles.curriculumSection}>
                <h2>Curriculum Overview</h2>
                <ul>
                    <li>Introduction to Digital Marketing</li>
                    <li>SEO (Search Engine Optimization)</li>
                    <li>Social Media Marketing</li>
                    <li>Email Marketing</li>
                    <li>Google Analytics</li>
                    <li>Paid Advertising (Google Ads, Facebook Ads)</li>
                    <li>Content Marketing</li>
                    <li>Affiliate Marketing</li>
                    <li>...and much more!</li>
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <h2>What Our Students Say</h2>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.testimonial}>
                        <p>
                            "The Annual Digital Marketing Program helped me gain hands-on experience and
                            understand the key aspects of digital marketing. I was able to get a job in a
                            reputed company right after the course!"
                        </p>
                        <h4>Ashitosh Gawande</h4>
                    </div>
                    <div className={styles.testimonial}>
                        <p>
                            "The trainers were experienced professionals who guided us through real-life
                            marketing campaigns. It was an enriching experience."
                        </p>
                        <h4>Chandrashekhar Dhote</h4>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className={styles.ctaSection}>
                <h2>Start Your Digital Marketing Journey Today</h2>
                <p>Enroll in our Annual Digital Marketing Program and take the first step towards a successful career.</p>
                <button className={styles.ctaButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default AnnualProgram;
