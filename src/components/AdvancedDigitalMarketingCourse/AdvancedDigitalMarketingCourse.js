import React, {useState} from 'react';
import styles from './AdvancedDigitalMarketingCourse.module.css';
import EnrollNowModal from "../EnrollNow/EnrollNow";

const AdvancedDigitalMarketingCourse = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Advanced Digital Marketing Course</h1>
                <p>Elevate your digital marketing skills to the next level!</p>
            </header>

            <section className={styles.overview}>
                <h2>Course Overview</h2>
                <p>This Advanced Digital Marketing Course is designed for those who wish to deepen their understanding of digital marketing strategies and tools. Gain practical skills and advanced techniques to excel in the industry.</p>
            </section>

            <section className={styles.objectives}>
                <h2>Course Objectives</h2>
                <ul>
                    <li>Master advanced SEO techniques and tools.</li>
                    <li>Implement effective content marketing strategies.</li>
                    <li>Utilize social media marketing for brand growth.</li>
                    <li>Explore data analytics for informed decision-making.</li>
                    <li>Develop comprehensive digital marketing strategies.</li>
                </ul>
            </section>

            <section className={styles.modules}>
                <h2>Course Modules</h2>
                <ul className={styles.moduleList}>
                    <li>Module 1: Advanced SEO Strategies</li>
                    <li>Module 2: Content Marketing Mastery</li>
                    <li>Module 3: Social Media Advertising</li>
                    <li>Module 4: Google Analytics for Marketers</li>
                    <li>Module 5: Email Marketing Automation</li>
                    <li>Module 6: Conversion Rate Optimization</li>
                    <li>Module 7: PPC Campaigns and Management</li>
                    <li>Module 8: Digital Marketing Strategy Development</li>
                </ul>
            </section>

            <section className={styles.benefits}>
                <h2>Benefits of Enrolling</h2>
                <p>By the end of this course, you will:</p>
                <ul>
                    <li>Gain expertise in digital marketing tools and techniques.</li>
                    <li>Receive certification recognized by industry professionals.</li>
                    <li>Enhance your career opportunities in digital marketing.</li>
                    <li>Network with peers and industry experts.</li>
                    <li>Access to real-world projects and case studies.</li>
                </ul>
            </section>

            <section className={styles.targetAudience}>
                <h2>Who Should Enroll?</h2>
                <p>This course is perfect for:</p>
                <ul>
                    <li>Marketing professionals aiming to upskill.</li>
                    <li>Business owners looking to enhance their online presence.</li>
                    <li>Recent graduates interested in a career in digital marketing.</li>
                    <li>Anyone wanting to learn advanced digital marketing techniques.</li>
                </ul>
            </section>

            <section className={styles.duration}>
                <h2>Course Duration</h2>
                <p>This course spans over 8 weeks, consisting of:</p>
                <ul>
                    <li>2 hours of live online classes each week.</li>
                    <li>1 hour of hands-on project work.</li>
                    <li>Access to supplementary materials and resources.</li>
                </ul>
            </section>

            <section className={styles.enrollment}>
                <h2>Enroll Now!</h2>
                <p>Take your digital marketing skills to new heights. Click below to enroll in the Advanced Digital Marketing Course!</p>
                <button onClick={() => setModalOpen(true)} className={styles.enrollButton}>Enroll Now</button>
                <EnrollNowModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                                course={"Advanced Digital Marketing Course"}/>
            </section>
        </div>
    );
};

export default AdvancedDigitalMarketingCourse;
