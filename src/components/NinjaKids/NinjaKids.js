import React, {useState} from 'react';
import styles from './NinjaKids.module.css';
import EnrollNowModal from "../EnrollNow/EnrollNow";

const NinjaKids = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Digi kiddo Digital Marketing Program</h1>
                <p>A fun and engaging way for kids to learn digital marketing!</p>
            </header>

            <section className={styles.overview}>
                <h2>Program Overview</h2>
                <p>The Digi kiddo Digital Marketing Program is designed for children aged 8-14. This program introduces young learners to the exciting world of digital marketing through interactive sessions, hands-on projects, and creative activities.</p>
            </section>

            <section className={styles.objectives}>
                <h2>Program Objectives</h2>
                <ul>
                    <li>Introduce kids to basic digital marketing concepts.</li>
                    <li>Enhance creativity through digital projects.</li>
                    <li>Develop critical thinking and problem-solving skills.</li>
                    <li>Foster teamwork and collaboration through group activities.</li>
                    <li>Build confidence in presenting ideas and projects.</li>
                </ul>
            </section>

            <section className={styles.modules}>
                <h2>Program Modules</h2>
                <ul className={styles.moduleList}>
                    <li>Module 1: Introduction to Digital Marketing</li>
                    <li>Module 2: Creating a Personal Brand</li>
                    <li>Module 3: Basics of Social Media Marketing</li>
                    <li>Module 4: Content Creation and Blogging</li>
                    <li>Module 5: Video Marketing and YouTube Basics</li>
                    <li>Module 6: Fun with Graphic Design</li>
                    <li>Module 7: Project Work and Presentations</li>
                </ul>
            </section>

            <section className={styles.benefits}>
                <h2>Benefits of Enrolling</h2>
                <p>By participating in this program, children will:</p>
                <ul>
                    <li>Gain a foundational understanding of digital marketing.</li>
                    <li>Develop valuable skills that will benefit their future careers.</li>
                    <li>Engage in interactive and hands-on learning experiences.</li>
                    <li>Receive a certificate upon successful completion of the program.</li>
                    <li>Have fun while learning in a supportive environment.</li>
                </ul>
            </section>

            <section className={styles.targetAudience}>
                <h2>Who Should Enroll?</h2>
                <p>This program is ideal for:</p>
                <ul>
                    <li>Children aged 8-14 with an interest in technology and marketing.</li>
                    <li>Parents looking for educational programs for their kids.</li>
                    <li>Schools and educational institutions aiming to enhance their curriculum.</li>
                </ul>
            </section>

            <section className={styles.enrollment}>
                <h2>Enroll Now!</h2>
                <p>Don’t miss out on this exciting opportunity for your kids to learn digital marketing. Click below to
                    enroll in the Digi kiddo Digital Marketing Program!</p>
                <button onClick={() => setModalOpen(true)} className={styles.enrollButton}>Enroll Now</button>
                <EnrollNowModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                                course={"Ninja Kids"}/>
            </section>
        </div>
    );
};

export default NinjaKids;
