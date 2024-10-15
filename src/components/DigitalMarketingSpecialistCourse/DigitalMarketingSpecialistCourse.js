import React, {useState} from 'react';
import styles from './DigitalMarketingSpecialistCourse.module.css';
import EnrollNowModal from "../EnrollNow/EnrollNow";

const DigitalMarketingSpecialistCourse = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.courseContainer}>
            {/* Header Section */}
            <header className={styles.courseHeader}>
                <h1>Digital Marketing Specialist Course</h1>
                <p>
                    Master all aspects of digital marketing with our in-depth, practical, and industry-oriented course.
                </p>
            </header>

            {/* Key Features Section */}
            <section className={styles.courseHighlights}>
                <h2>Key Features</h2>
                <ul>
                    <li>Industry-recognized Certification</li>
                    <li>Hands-on Projects and Assignments</li>
                    <li>SEO, SEM, SMM, and Email Marketing Mastery</li>
                    <li>Job Assistance and Career Support</li>
                </ul>
            </section>

            {/* Curriculum Overview */}
            <section className={styles.courseCurriculum}>
                <h2>Curriculum Overview</h2>
                <div className={styles.curriculumGrid}>
                    <div className={styles.module}>
                        <h3>Module 1: Introduction to Digital Marketing</h3>
                        <p>Understand the fundamentals of digital marketing, including key terminologies, tools, and platforms.</p>
                    </div>
                    <div className={styles.module}>
                        <h3>Module 2: Search Engine Optimization (SEO)</h3>
                        <p>Master on-page and off-page SEO techniques, including keyword research, link-building, and ranking strategies.</p>
                    </div>
                    <div className={styles.module}>
                        <h3>Module 3: Social Media Marketing (SMM)</h3>
                        <p>Learn to craft and execute effective social media strategies across various platforms like Facebook, Instagram, LinkedIn, and more.</p>
                    </div>
                    <div className={styles.module}>
                        <h3>Module 4: Pay-Per-Click (PPC) Advertising</h3>
                        <p>Deep dive into Google Ads and other PPC platforms to create high-conversion ad campaigns.</p>
                    </div>
                </div>
            </section>

            {/* Student Reviews Section */}
            <section className={styles.studentReviews}>
                <h2>What Our Students Say</h2>
                <div className={styles.review}>
                    <p>"This course gave me the tools I needed to excel in digital marketing. I landed my dream job thanks to their career support!"</p>
                    <h4>— John Doe</h4>
                </div>
                <div className={styles.review}>
                    <p>"Practical projects and hands-on experience made all the difference. Highly recommended for anyone looking to build a digital marketing career."</p>
                    <h4>— Jane Smith</h4>
                </div>
            </section>

            {/* Career Support Section */}
            <section className={styles.careerSupport}>
                <h2>Career Support</h2>
                <p>
                    Our comprehensive career support includes resume building, interview preparation, and job placement assistance, ensuring you're well-prepared for the industry.
                </p>
            </section>

            {/* FAQs Section */}
            <section className={styles.courseFaqs}>
                <h2>Frequently Asked Questions</h2>
                <div className={styles.faq}>
                    <h4>What is the duration of the course?</h4>
                    <p>The course spans over 3 months, with flexible learning schedules designed for both working professionals and students.</p>
                </div>
                <div className={styles.faq}>
                    <h4>Is prior experience required?</h4>
                    <p>No, this course is designed for beginners as well as professionals looking to advance their skills.</p>
                </div>
                <div className={styles.faq}>
                    <h4>What kind of projects will I work on?</h4>
                    <p>
                        You'll work on real-world projects, including SEO audits, social media strategy creation, email marketing campaigns, and more.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.courseEnroll}>
                <h2>Ready to Become a Certified Digital Marketing Specialist?</h2>
                <button onClick={() => setModalOpen(true)} className={styles.enrollBtn}>Enroll Now</button>
                <EnrollNowModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} course={"Digital Marketing Specialist Course"} />
            </section>
        </div>
    );
};

export default DigitalMarketingSpecialistCourse;
