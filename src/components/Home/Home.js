import React, {useState} from 'react';
import './Home.css';
import Demo from "../Demo/Demo"; // Import the CSS for styling

const Home = () => {
    const testimonials = [
        {
            name: "John Doe",
            message: "Digitech Digital provided an excellent learning experience. The instructors were knowledgeable and supportive!",
        },
        {
            name: "Jane Smith",
            message: "The course content was comprehensive and easy to follow. I gained valuable skills for my career.",
        },
        {
            name: "Michael Johnson",
            message: "I highly recommend Digitech Digital! The hands-on approach made all the difference in my learning.",
        },
        {
            name: "Emily Davis",
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
                        <a href="#contact" className="cta-button-secondary">Contact Us</a>
                    </div>
                </div>
            </div>

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
                    <p>Experience our platform and courses firsthand. Sign up for a free demo and discover how Digitech Digital can transform your skills.</p>
                    <button className="free-demo-btn" onClick={openDemoModal}>Get Your Free Demo</button>
                </div>
            </section>

            {/* Modal for Demo */}
            <Demo isOpen={isDemoOpen} onClose={closeDemoModal} />
            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2 className="testimonials-title">What Our Students Say</h2>
                <div className="testimonials-container">
                    {/* Testimonial Card 1 */}
                    <div className="testimonial-card">
                        <p className="testimonial-content">"The courses here changed my career path!"</p>
                        <p className="testimonial-author">- Jane Doe</p>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="testimonial-card">
                        <p className="testimonial-content">"I learned so much and felt supported throughout!"</p>
                        <p className="testimonial-author">- John Smith</p>
                    </div>
                </div>
            </div>
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
