import React, {useState} from 'react';
import './Home.css';
import Demo from "../Demo/Demo";
import NewsSection from "../NewsSection/NewsSection";
import CoursesPage from "../../pages/CoursesPage";
import Courses from "../Courses/Courses"; // Import the CSS for styling

const Home = () => {
    const testimonials = [
        {
            name: "Kapil Kumar",
            message: "Digitech Digital provided an excellent learning experience. The instructors were knowledgeable and supportive!",
        },
        {
            name: "Mohit Sharma",
            message: "The course content was comprehensive and easy to follow. I gained valuable skills for my career.",
        },
        {
            name: "Nitish Raj",
            message: "I highly recommend Digitech Digital! The hands-on approach made all the difference in my learning.",
        },
        {
            name: "Rahul Yadav",
            message: "The community and networking opportunities were fantastic. I made great connections during my training.",
        },
    ];
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const openDemoModal = () => {
        setIsDemoOpen(true);
    };

    const closeDemoModal = () => {
        setIsDemoOpen(false);
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Digitech Digital</h1>
                    <p className="hero-description">
                        Empowering Your Digital Skills for the Future
                    </p>
                    <div className="cta-buttons">
                        <a href="#programs" className="cta-button">View Programs</a>
                        <a href="/contact" className="cta-button-secondary">Contact Us</a>
                    </div>
                </div>
            </div>
            <NewsSection />
            <div className="trusted-brand-section">
                <div className="trusted-brand-content">
                    <div className="trusted-brand-image">
                        <img
                            src="https://digiperform.com/wp-content/uploads/2022/02/bluef.png" // Replace with actual logo image URL
                            alt="Digitech Digital Logo"
                        />
                    </div>
                    <div className="trusted-brand-text">
                        <h2>Asia's Most Trusted Brand</h2>
                        <p>
                            Digitech Digital has earned a reputation for being the leading brand in digital
                            marketing and technology education, recognized across Asia.
                        </p>
                    </div>
                </div>
            </div>
            <section className="get-certified-section">
                <h2>Get Certified</h2>
                <div className="certified-content">
                    <p>Become a certified expert in digital marketing and other skills by completing our
                        industry-recognized courses.</p>
                    <button className="certified-cta">Enroll Now</button>
                </div>
            </section>
            {/* Programs Section */}
            <div className="programs-section" id="programs">
                <h2 className="programs-title">Our Programs</h2>
                <div className="programs-container">
                    {/* Program Card 1 */}
                    <div className="program-card">
                        <h3 className="program-card-title">Digital Marketing</h3>
                        <p className="program-card-description">Learn the art of digital marketing and grow your
                            career.</p>
                    </div>

                    {/* Program Card 2 */}
                    <div className="program-card">
                        <h3 className="program-card-title">Data Science</h3>
                        <p className="program-card-description">Dive into data and analytics for better business
                            decisions.</p>
                    </div>

                    {/* Program Card 3 */}
                    <div className="program-card">
                        <h3 className="program-card-title">Web Development</h3>
                        <p className="program-card-description">Build and maintain stunning websites and
                            applications.</p>
                    </div>
                </div>
            </div>
            {/* Free Demo Section */}
            <section className="free-demo-section">
                <div className="free-demo-content">
                    <h2>Start with a Free Demo</h2>
                    <p>Experience our platform and courses firsthand. Sign up for a free demo and discover how Digitech
                        Digital can transform your skills.</p>
                    <button className="free-demo-btn" onClick={openDemoModal}>Get Your Free Demo</button>
                </div>
            </section>

            {/* Modal for Demo */}
            <Demo isOpen={isDemoOpen} onClose={closeDemoModal}/>
            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2 className="testimonials-title">What Our Students Say</h2>
                <div className="testimonials-container">
                    {/* Testimonial Card 1 */}
                    <div className="testimonial-card">
                        <p className="testimonial-content">"The courses here changed my career path!"</p>
                        <p className="testimonial-author">- Deepak Rawat</p>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="testimonial-card">
                        <p className="testimonial-content">"I learned so much and felt supported throughout!"</p>
                        <p className="testimonial-author">- Satish Bind</p>
                    </div>
                </div>
            </div>
            <Courses />
            <section className="testimonials-section">
                <h2>What Our Trainees Say</h2>
                <div className="testimonials">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <p>"{testimonial.message}"</p>
                            <h3>- {testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
            {/* Footer Section */}
        </div>
    );
};

export default Home;
