import React from 'react';
import styles from './MasterProgram.module.css';

const MasterProgram = () => {
    return (
        <div className={styles.masterProgramContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Master Program in AI, ML & Analytics</h1>
                    <p>Join the revolution and become a certified expert in AI, Machine Learning, and Data Analytics.</p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://digiperform.com/wp-content/uploads/2022/03/963.png" alt="AI, ML, and Analytics" />
                </div>
            </section>

            {/* Program Overview Section */}
            <section className={styles.programOverview}>
                <h2>Why Enroll in this Program?</h2>
                <p>
                    This program provides cutting-edge training in Artificial Intelligence, Machine Learning, and Analytics.
                    It is designed to make you industry-ready with practical skills and certifications that matter.
                </p>
            </section>

            {/* Key Highlights Section */}
            <section className={styles.keyHighlights}>
                <h2>Key Highlights</h2>
                <div className={styles.highlightsContainer}>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Marketing-Digital-Marketing-Functions.png" alt="Industry Experts" />
                        <h3>Learn from Industry Experts</h3>
                        <p>Train with top professionals who are leading the AI and ML revolution.</p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Digital-Marketing-Industrial-Applications.png" alt="Hands-on Experience" />
                        <h3>Hands-on Experience</h3>
                        <p>Work on real-world projects to understand AI & ML implementations.</p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Web-Research-Surveys-Management.png" alt="Job Assistance" />
                        <h3>100% Job Assistance</h3>
                        <p>Get job-ready with comprehensive career support and placement opportunities.</p>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className={styles.curriculumSection}>
                <h2>Curriculum</h2>
                <ul>
                    <li>Introduction to AI and ML</li>
                    <li>Supervised and Unsupervised Learning</li>
                    <li>Deep Learning Fundamentals</li>
                    <li>Data Analytics with Python</li>
                    <li>Industry Case Studies & Projects</li>
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <h2>What Our Students Say</h2>
                <div className={styles.testimonial}>
                    <p>"This program transformed my career! The in-depth AI and ML training was exactly what I needed."</p>
                    <h4>Rahul Kumar</h4>
                </div>
                <div className={styles.testimonial}>
                    <p>"The curriculum is packed with real-world projects, and the job assistance was top-notch!"</p>
                    <h4>Shreya Patil</h4>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className={styles.ctaSection}>
                <h2>Get Started Today</h2>
                <p>Take the leap and become a certified AI and ML expert with Digiperform.</p>
                <button className={styles.ctaButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default MasterProgram;
