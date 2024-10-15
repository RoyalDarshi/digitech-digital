import React, {useState} from 'react';
import styles from './DigitalMarketingMasterCourse.module.css';
import EnrollNowModal from "../EnrollNow/EnrollNow";

const DigitalMarketingMasterCourse = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Digital Marketing Master Course</h1>
                <p>Become a certified digital marketing expert and elevate your career!</p>
            </header>

            <section className={styles.overview}>
                <h2>Course Overview</h2>
                <p>This comprehensive Digital Marketing Master Course is designed to equip you with the necessary skills and knowledge to succeed in the fast-paced digital marketing landscape. You will learn about the latest tools, strategies, and techniques used by industry leaders.</p>
            </section>

            <section className={styles.objectives}>
                <h2>Course Objectives</h2>
                <ul>
                    <li>Understand the core principles of digital marketing.</li>
                    <li>Gain proficiency in SEO, PPC, content marketing, and social media marketing.</li>
                    <li>Develop skills to create effective digital marketing strategies.</li>
                    <li>Learn how to analyze and optimize marketing campaigns using analytics tools.</li>
                    <li>Prepare for a career in digital marketing with a focus on real-world applications.</li>
                </ul>
            </section>

            <section className={styles.modules}>
                <h2>Course Modules</h2>
                <ul className={styles.moduleList}>
                    <li>Module 1: Introduction to Digital Marketing</li>
                    <li>Module 2: SEO (Search Engine Optimization)</li>
                    <li>Module 3: Content Marketing</li>
                    <li>Module 4: Social Media Marketing</li>
                    <li>Module 5: Email Marketing</li>
                    <li>Module 6: PPC (Pay Per Click) Advertising</li>
                    <li>Module 7: Affiliate Marketing</li>
                    <li>Module 8: Digital Analytics</li>
                    <li>Module 9: Digital Marketing Strategy</li>
                    <li>Module 10: Trends in Digital Marketing</li>
                </ul>
            </section>

            <section className={styles.benefits}>
                <h2>Why Enroll?</h2>
                <p>Upon completing this course, you will:</p>
                <ul>
                    <li>Gain hands-on experience with leading digital marketing tools.</li>
                    <li>Receive a certification recognized by industry leaders.</li>
                    <li>Enhance your resume and improve your career prospects.</li>
                    <li>Learn from industry experts and professionals through practical sessions.</li>
                    <li>Network with fellow students and industry connections.</li>
                </ul>
            </section>

            <section className={styles.targetAudience}>
                <h2>Who Should Enroll?</h2>
                <p>This course is ideal for:</p>
                <ul>
                    <li>Marketing professionals looking to enhance their digital skills.</li>
                    <li>Business owners wanting to leverage digital marketing for growth.</li>
                    <li>Recent graduates seeking a career in digital marketing.</li>
                    <li>Anyone interested in understanding the digital marketing landscape.</li>
                </ul>
            </section>

            <section className={styles.duration}>
                <h2>Course Duration</h2>
                <p>The course is designed to be completed in 12 weeks, with flexible scheduling options available. Each week includes:</p>
                <ul>
                    <li>2 hours of live instruction</li>
                    <li>1 hour of hands-on practice</li>
                    <li>Additional study materials and resources</li>
                </ul>
            </section>

            <section className={styles.enrollment}>
                <h2>Enroll Now!</h2>
                <p>Take the first step towards a successful career in digital marketing. Click the button below to
                    enroll.</p>
                <button onClick={() => setModalOpen(true)} className={styles.enrollButton}>Enroll Now</button>
                <EnrollNowModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                                course={"Digital Marketing Master Course "}/>
            </section>
        </div>
    );
};

export default DigitalMarketingMasterCourse;
