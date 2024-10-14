import React from 'react';
import './ProgramsSection.css';
import ProgramCard from "../ProgramCard/ProgramCard";
import HighlightsSection from "../HighlightsSection/HighlightsSection"; // Assuming you want to create a separate CSS file for this component

const ProgramsSection = () => {
    return (
        <div className="certified-programs-section" id="certified-programs">
            <h2 className="section-title">Digitech Digital Certified Programs. Join The Next Revolution Now!</h2>
            <p className="section-description">
                Digitech Digital, as a Leading Digital Marketing Courses & Certification Academy, provides
                value-for-money courses which you can afford at the best price in the market. 57,000+ Digitech
                Digitalers got a placement with Digitech Digital Certifications in top brands.
            </p>

            <div className="programs-container">
                <ProgramCard
                    category="Data Science"
                    index={"advanced-digital-marketing"}
                    title="Data Science, AI & ML"
                    description="Learn to harness data for business and technological advancements."
                    backgroundImage="https://digiperform.com/wp-content/uploads/2023/05/machine-learning-hand-robot-touching-computer-chip-binary-data-1.jpg"
                />
                <ProgramCard
                    category="Annual Program"
                    index={"seo-course"}
                    title="Annual DigiHero Program"
                    description="Master the art of digital marketing with our comprehensive annual program."
                    backgroundImage="https://digiperform.com/wp-content/uploads/2022/02/maxresdefault.jpg"
                />
                <ProgramCard
                    category="Digital Marketing"
                    index={"social-media-marketing"}
                    title="Online Marketing Professional"
                    description="Become a certified online marketing expert with real-world experience."
                    backgroundImage="https://digiperform.com/wp-content/uploads/2022/02/Indian-student-1.jpg"
                />
                <ProgramCard
                    category="Digital Marketing"
                    index={"web-development-training"}
                    title="Online Marketing Practitioner"
                    description="Advance your skills in online marketing with practical learning."
                    backgroundImage="https://digiperform.com/wp-content/uploads/2022/02/banner-img.jpg"
                />
            </div>

            <HighlightsSection/>
        </div>
    );
};

export default ProgramsSection;
