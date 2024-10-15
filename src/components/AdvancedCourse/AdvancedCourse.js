import React from 'react';
import styles from './AdvancedCourse.module.css';

const AdvancedCourse = () => {
    return (
        <div className={styles.courseContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Advanced Digital Marketing Course</h1>
                    <p>
                        Master the art of digital marketing with our advanced course, designed to provide
                        in-depth knowledge and practical experience to enhance your digital marketing skills.
                    </p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://digiperform.com/wp-content/uploads/2022/03/963.png" alt="Advanced Digital Marketing Course" />
                </div>
            </section>

            {/* Course Highlights Section */}
            <section className={styles.highlightsSection}>
                <h2>Why Enroll in Our Advanced Digital Marketing Course?</h2>
                <div className={styles.highlightsContainer}>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Digital-Marketing-Client-Servicing.png" alt="Expert Trainers" />
                        <h3>Expert Trainers</h3>
                        <p>Learn from industry professionals with years of experience in digital marketing.</p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Affiliate-Marketing.png" alt="Hands-On Experience" />
                        <h3>Hands-On Experience</h3>
                        <p>Gain practical knowledge with live projects and campaigns.</p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/SEO-Link-Building-Outreach.png" alt="Job Support" />
                        <h3>Job Support</h3>
                        <p>Benefit from our job assistance to land your dream job in the digital marketing world.</p>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className={styles.curriculumSection}>
                <h2>What You'll Learn</h2>
                <ul>
                    <li>Advanced SEO Techniques</li>
                    <li>Social Media Advertising Strategies</li>
                    <li>Content Marketing and Strategy</li>
                    <li>Pay-Per-Click (PPC) Advertising</li>
                    <li>Advanced Google Analytics</li>
                    <li>Email and Mobile Marketing</li>
                    <li>Conversion Rate Optimization</li>
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
                            "The Advanced Digital Marketing Course helped me sharpen my skills and gain insights
                            into advanced strategies. It played a huge role in securing my position at a leading
                            digital marketing agency!"
                        </p>
                        <h4>Satish Bind</h4>
                    </div>
                    <div className={styles.testimonial}>
                        <p>
                            "I loved the practical approach and the real-world projects. This course is a must
                            for anyone serious about a career in digital marketing."
                        </p>
                        <h4>Deepak Rawat</h4>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className={styles.ctaSection}>
                <h2>Take Your Digital Marketing Skills to the Next Level</h2>
                <p>Enroll in the Advanced Digital Marketing Course and get certified today!</p>
                <button className={styles.ctaButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default AdvancedCourse;
