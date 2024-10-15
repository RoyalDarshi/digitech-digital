import React from 'react';
import styles from './AnnualDigitalMarketingProgram.module.css';

const AnnualDigitalMarketingProgram = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Annual Digital Marketing Program</h1>
                <p>Your comprehensive guide to mastering digital marketing over a year!</p>
            </header>

            <section className={styles.overview}>
                <h2>Course Overview</h2>
                <p>This Annual Digital Marketing Program is designed for individuals who want to gain in-depth knowledge and practical experience in digital marketing. Over the course of one year, you'll learn essential skills that will prepare you for a successful career in the digital space.</p>
            </section>

            <section className={styles.objectives}>
                <h2>Course Objectives</h2>
                <ul>
                    <li>Develop a strong understanding of digital marketing fundamentals.</li>
                    <li>Gain expertise in SEO, PPC, content marketing, and social media strategies.</li>
                    <li>Learn how to analyze and optimize marketing campaigns.</li>
                    <li>Master tools and techniques to drive traffic and engagement.</li>
                    <li>Prepare for a career in digital marketing with real-world applications.</li>
                </ul>
            </section>

            <section className={styles.modules}>
                <h2>Course Modules</h2>
                <ul className={styles.moduleList}>
                    <li>Module 1: Introduction to Digital Marketing</li>
                    <li>Module 2: Search Engine Optimization (SEO)</li>
                    <li>Module 3: Pay-Per-Click (PPC) Advertising</li>
                    <li>Module 4: Content Marketing Strategies</li>
                    <li>Module 5: Social Media Marketing</li>
                    <li>Module 6: Email Marketing Techniques</li>
                    <li>Module 7: Analytics and Data Insights</li>
                    <li>Module 8: Digital Marketing Strategy</li>
                    <li>Module 9: Mobile Marketing</li>
                    <li>Module 10: Emerging Trends in Digital Marketing</li>
                </ul>
            </section>

            <section className={styles.benefits}>
                <h2>Benefits of Enrolling</h2>
                <p>By completing this program, you will:</p>
                <ul>
                    <li>Receive a globally recognized certification.</li>
                    <li>Access to a comprehensive curriculum designed by industry experts.</li>
                    <li>Gain practical skills through hands-on projects.</li>
                    <li>Network with professionals and peers in the digital marketing field.</li>
                    <li>Enhance your career prospects and job opportunities.</li>
                </ul>
            </section>

            <section className={styles.targetAudience}>
                <h2>Who Should Enroll?</h2>
                <p>This program is suitable for:</p>
                <ul>
                    <li>Marketing professionals looking to enhance their digital skills.</li>
                    <li>Entrepreneurs wanting to leverage digital marketing for business growth.</li>
                    <li>Students interested in starting a career in digital marketing.</li>
                    <li>Anyone looking to upgrade their knowledge and skills in the digital domain.</li>
                </ul>
            </section>

            <section className={styles.duration}>
                <h2>Course Duration</h2>
                <p>The Annual Digital Marketing Program is structured over 12 months, including:</p>
                <ul>
                    <li>Weekly live sessions and interactive workshops.</li>
                    <li>Access to an online learning platform with resources.</li>
                    <li>Real-world case studies and projects to apply your knowledge.</li>
                </ul>
            </section>

            <section className={styles.enrollment}>
                <h2>Enroll Now!</h2>
                <p>Don’t miss out on this opportunity to master digital marketing. Click below to enroll in the Annual Digital Marketing Program!</p>
                <button className={styles.enrollButton}>Enroll Now</button>
            </section>
        </div>
    );
};

export default AnnualDigitalMarketingProgram;
