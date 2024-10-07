import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <CoursesSection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
};

export default HomePage;
