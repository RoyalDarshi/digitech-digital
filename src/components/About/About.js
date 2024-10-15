import React from 'react';
import styles from './About.module.css';
import heroImg from "../../assets/heroImg.webp"
import jobAss from "../../assets/jobAssistance.png"
import digiMarkrt from "../../assets/digiMarket.png"

const AboutDigiperform = () => {
    return (
        <div className={styles['about-container']}>
            {/* Hero Section */}
            <section className={styles['hero-section']}>
                <div className={styles['hero-content']}>
                    <h1>About Digiperform</h1>
                    <p>
                        Digiperform is the leading digital marketing training company in India, providing
                        excellent opportunities for individuals and businesses to advance in the digital world.
                    </p>
                </div>
                <div className={styles['hero-image']}>
                    {/*<img src={heroImg} alt="About Digiperform" />*/}
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className={styles['mission-vision-section']}>
                <div className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>
                        To bridge the gap between the digital industry's demands and the
                        talent available, by providing quality digital marketing education.
                    </p>
                </div>
                <div className={styles.vision}>
                    <h2>Our Vision</h2>
                    <p>
                        To empower individuals and businesses with practical digital marketing skills
                        and help them achieve their goals.
                    </p>
                </div>
            </section>

            {/* Highlights Section */}
            <section className={styles['highlights-section']}>
                <h2>Why Digiperform?</h2>
                <div className={styles['highlights-container']}>
                    <div className={styles.highlight}>
                        <img src={heroImg} alt="Industry Recognized" />
                        <h3>Industry Recognized</h3>
                        <p>Our courses are recognized by leading companies and organizations in the industry.</p>
                    </div>
                    <div className={styles.highlight}>
                        <img src={jobAss} alt="Job Assistance" />
                        <h3>Job Assistance</h3>
                        <p>We provide 100% job assistance and help students get placed in top companies.</p>
                    </div>
                    <div className={styles.highlight}>
                        <img src={digiMarkrt} alt="Practical Training" />
                        <h3>Practical Training</h3>
                        <p>Get hands-on experience with real-world projects and campaigns.</p>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className={styles['video-section']}>
                <h2>Watch Our Story</h2>
                <div className={styles['video-container']}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/video-id"
                        title="Digiperform Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles['testimonials-section']}>
                <h2>What Our Students Say</h2>
                <div className={styles['testimonials-container']}>
                    <div className={styles.testimonial}>
                        <p>"Digiperform's training helped me kickstart my digital marketing career."</p>
                        <h4>- Student Name</h4>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"The practical approach made all the difference in my learning."</p>
                        <h4>- Student Name</h4>
                    </div>
                </div>
            </section>

            {/* Footer Call-to-Action */}
            <section className={styles['cta-section']}>
                <h2>Join the Digital Revolution</h2>
                <p>Take the next step in your career with Digiperform's industry-leading courses.</p>
                <button className={styles['cta-button']}>Get Started</button>
            </section>
        </div>
    );
};

export default AboutDigiperform;
