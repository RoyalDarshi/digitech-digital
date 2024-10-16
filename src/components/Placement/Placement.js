import React from 'react';
import styles from './Placement.module.css';

const Placement = () => {
    return (
        <div className={styles.placementPage}>
            <header className={styles.placementHeader}>
                <h1 className={styles.placementTitle}>Digitech Digital Placement</h1>
                <p className={styles.placementIntro}>
                    Unlock your career potential with our dedicated placement assistance.
                </p>
            </header>

            <section className={styles.placementSection}>
                <h2 className={styles.placementSectionTitle}>Program Highlights</h2>
                <ul className={styles.placementList}>
                    <li>Comprehensive training and skill development</li>
                    <li>Access to industry leaders and experts</li>
                    <li>Resume building and interview preparation</li>
                    <li>Job placement assistance and support</li>
                </ul>
            </section>

            <section className={styles.placementSection}>
                <h2 className={styles.placementSectionTitle}>Placement Statistics</h2>
                <div className={styles.statCard}>
                    <h3 className={styles.statNumber}>85%</h3>
                    <p className={styles.statLabel}>Placement Rate</p>
                </div>
                <div className={styles.statCard}>
                    <h3 className={styles.statNumber}>200+</h3>
                    <p className={styles.statLabel}>Companies Hiring</p>
                </div>
                <div className={styles.statCard}>
                    <h3 className={styles.statNumber}>5000+</h3>
                    <p className={styles.statLabel}>Students Placed</p>
                </div>
            </section>

            <section className={styles.placementSection}>
                <h2 className={styles.placementSectionTitle}>Testimonials</h2>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>
                        "Digitech Digital has transformed my career. The placement assistance was exceptional!"
                    </p>
                    <p className={styles.testimonialAuthor}>Shubham Patel</p>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>
                        "I landed my dream job thanks to Digitech Digital's comprehensive training."
                    </p>
                    <p className={styles.testimonialAuthor}>Rahul Kumar</p>
                </div>
            </section>

            <section className={styles.subscribeSection}>
                <h2 className={styles.subscribeTitle}>Ready to Start Your Journey?</h2>
                <button className={styles.subscribeButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default Placement;
