import React from 'react';
import styles from './FoundationCourse.module.css';

const FoundationCourse = () => {
    return (
        <div className={styles.courseContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Digital Marketing Foundation Course</h1>
                    <p>
                        Kickstart your digital marketing journey with our foundation course, designed to help you
                        learn the basics of digital marketing, including SEO, social media, and more.
                    </p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://digiperform.com/wp-content/uploads/2022/03/963.png" alt="Digital Marketing Foundation Course" />
                </div>
            </section>

            {/* Course Highlights Section */}
            <section className={styles.highlightsSection}>
                <h2>Why Choose Our Foundation Course?</h2>
                <div className={styles.highlightsContainer}>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/SEO-Core-icon-1.png" alt="Practical Learning" />
                        <h3>Practical Learning</h3>
                        <p>
                            Hands-on exercises and real-world examples to grasp the basics of digital marketing.
                        </p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Social-Media-Moderation-icon-1.png" alt="Industry Experts" />
                        <h3>Industry Experts</h3>
                        <p>
                            Learn from experienced professionals with proven industry expertise.
                        </p>
                    </div>
                    <div className={styles.highlightCard}>
                        <img src="https://digiperform.com/wp-content/uploads/2023/04/Social-Media-Moderation-icon-1.png" alt="Beginner Friendly" />
                        <h3>Beginner Friendly</h3>
                        <p>
                            No prior experience required. Ideal for those just starting out in digital marketing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className={styles.curriculumSection}>
                <h2>Course Curriculum</h2>
                <div className={styles.moduleContainer}>
                    <h3>Module 1: Introduction to Digital Marketing</h3>
                    <ul>
                        <li>Understanding Digital Marketing and its Importance</li>
                        <li>Key Concepts and Terminologies</li>
                        <li>Digital Marketing Channels Overview</li>
                    </ul>

                    <h3>Module 2: Website Planning and Creation</h3>
                    <ul>
                        <li>How to Plan a Website</li>
                        <li>Choosing the Right Domain and Hosting</li>
                        <li>Understanding User Experience (UX) and User Interface (UI)</li>
                        <li>Building Your First Website</li>
                    </ul>

                    <h3>Module 3: Search Engine Optimization (SEO)</h3>
                    <ul>
                        <li>Basics of SEO</li>
                        <li>On-Page and Off-Page SEO Techniques</li>
                        <li>Using SEO Tools</li>
                        <li>Keyword Research and Optimization</li>
                    </ul>

                    <h3>Module 4: Social Media Marketing</h3>
                    <ul>
                        <li>Introduction to Social Media Platforms</li>
                        <li>Creating Social Media Strategies</li>
                        <li>Content Creation for Social Media</li>
                        <li>Measuring Social Media Success</li>
                    </ul>

                    <h3>Module 5: Email and Mobile Marketing</h3>
                    <ul>
                        <li>Fundamentals of Email Marketing</li>
                        <li>Creating Effective Email Campaigns</li>
                        <li>Introduction to Mobile Marketing</li>
                        <li>SMS and WhatsApp Marketing Strategies</li>
                    </ul>

                    <h3>Module 6: Google Analytics Basics</h3>
                    <ul>
                        <li>Introduction to Google Analytics</li>
                        <li>Setting Up Google Analytics</li>
                        <li>Tracking Website Performance</li>
                        <li>Understanding User Behavior</li>
                    </ul>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.testimonialsSection}>
                <h2>Success Stories</h2>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.testimonial}>
                        <p>
                            "This foundation course was a perfect entry into the world of digital marketing.
                            The modules were easy to follow, and I gained a solid understanding of the basics."
                        </p>
                        <h4>- Sarah Thompson</h4>
                    </div>
                    <div className={styles.testimonial}>
                        <p>
                            "The hands-on approach in this course helped me build a website from scratch and
                            optimize it using SEO techniques. Highly recommend this course to beginners!"
                        </p>
                        <h4>- David Harris</h4>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className={styles.ctaSection}>
                <h2>Ready to Start Your Digital Marketing Journey?</h2>
                <p>Join our Digital Marketing Foundation Course and lay the groundwork for a successful digital career.</p>
                <button className={styles.ctaButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default FoundationCourse;
