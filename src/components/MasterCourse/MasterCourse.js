import React from 'react';
import styles from './MasterCourse.module.css';

const MasterCourse = () => {
    return (
        <div className={styles.courseContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Digital Marketing Master Course</h1>
                    <p>
                        Become a certified digital marketing expert with our comprehensive master course,
                        covering the latest trends, tools, and strategies to help you excel in the digital world.
                    </p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://digiperform.com/wp-content/uploads/2022/03/963.png" alt="Digital Marketing Master Course" />
                </div>
            </section>

            {/* Course Highlights Section */}
            <section className={styles.highlightsSection}>
                <h2>Why Choose Our Digital Marketing Master Course?</h2>
                <div className={styles.highlightsContainer}>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Web-Analytics.png" alt="In-depth Learning" />
                        <h3>In-depth Learning</h3>
                        <p>
                            Comprehensive coverage of all aspects of digital marketing, from SEO to analytics.
                        </p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Social-Media-Audit-Campaign-Strategy.png" alt="Certified Program" />
                        <h3>Certified Program</h3>
                        <p>
                            Get certified by the most trusted name in digital marketing education.
                        </p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Business-Social-Media-Graphics-Designing.png" alt="Live Projects" />
                        <h3>Live Projects</h3>
                        <p>
                            Work on real-world projects to gain hands-on experience and practical knowledge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className={styles.curriculumSection}>
                <h2>What You'll Learn</h2>
                <ul>
                    <li>SEO (Search Engine Optimization)</li>
                    <li>SEM (Search Engine Marketing)</li>
                    <li>Social Media Marketing</li>
                    <li>Google Analytics & PPC</li>
                    <li>Email & Mobile Marketing</li>
                    <li>Content Marketing Strategy</li>
                    <li>Affiliate Marketing & more!</li>
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <h2>Success Stories</h2>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.testimonial}>
                        <p>
                            "This course completely transformed my career. The comprehensive approach and practical
                            projects gave me the confidence to excel in the digital marketing industry!"
                        </p>
                        <h4>Rohit Kumar</h4>
                    </div>
                    <div className={styles.testimonial}>
                        <p>
                            "The Digital Marketing Master Course provided me with the tools and skills to land my
                            dream job. The certification is recognized everywhere!"
                        </p>
                        <h4>Abhishek Mishra</h4>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className={styles.ctaSection}>
                <h2>Join the Digital Marketing Revolution Today!</h2>
                <p>Enroll in the Digital Marketing Master Course and secure your future in the digital economy.</p>
                <button className={styles.ctaButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default MasterCourse;
