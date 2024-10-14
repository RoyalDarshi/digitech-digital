import React from 'react';
import './HighlightsSection.css';

const highlightsData = [
    {
        icon: '🧠', // Example icon, can be replaced with an actual image or custom icon
        title: 'Innovative Ideas',
        description:
            'Innovative ideas are really important to make you different from others. Digitech Digital involves innovative ideologies for imparting knowledge and skills to our trainees.',
    },
    {
        icon: '📚',
        title: 'Practical Learning',
        description:
            'We believe in practical learning, and provides live training sessions and helped students understand each concept effectively in depth way.',
    },
    {
        icon: '✔️',
        title: 'Quality Training',
        description:
            'The quality of training is the key foundation of any institute. We are highly concerned towards quality. Our course modules are consistent and meet industry standards.',
    },
    {
        icon: '👥',
        title: '100% Job Assistance',
        description:
            'Digitech Digital as a leading Digi Marketing Institute provides 100% job assistance to our students. We tied up with several organizations for Job placements.',
    },
];

const HighlightsSection = () => {
    return (
        <div className="highlights-section">
            <div className="highlights-container">
                {highlightsData.map((highlight, index) => (
                    <div key={index} className="highlight-card">
                        <div className="highlight-icon">{highlight.icon}</div>
                        <h3 className="highlight-title">{highlight.title}</h3>
                        <p className="highlight-description">{highlight.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightsSection;
