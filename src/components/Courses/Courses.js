// src/components/Courses/Courses.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const courseData = [
    {
        id: 'advanced-digital-marketing', // Unique identifier for routing
        title: 'Advanced Digital Marketing Training',
        description: 'Learn all aspects of digital marketing, including SEO, SEM, social media, and more.',
        image: 'https://digiperform.com/wp-content/uploads/2023/05/machine-learning-hand-robot-touching-computer-chip-binary-data-1.jpg',
    },
    {
        id: 'seo-course',
        title: 'SEO Course',
        description: 'Master the art of search engine optimization and get your website to the top of search results.',
        image: 'https://digiperform.com/wp-content/uploads/2022/02/maxresdefault.jpg',
    },
    {
        id: 'social-media-marketing',
        title: 'Social Media Marketing Course',
        description: 'Understand how to run successful social media campaigns on platforms like Facebook, Instagram, and Twitter.',
        image: 'https://digiperform.com/wp-content/uploads/2022/02/Indian-student-1.jpg',
    },
    {
        id: 'web-development-training',
        title: 'Web Development Training',
        description: 'Become proficient in front-end and back-end web development with our full-stack web development course.',
        image: 'https://digiperform.com/wp-content/uploads/2022/02/banner-img.jpg',
    },
];

const Courses = () => {
    return (
        <div className="courses-container">
            <h1 className="courses-title">Our Programs</h1>
            <div className="courses-grid">
                {courseData.map((course, index) => (
                    <Link to={`/course/${course.id}`} className="course-card" key={index}>
                        <img
                            src={course.image}
                            alt={course.title}
                            className="course-image"
                        />
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-description">{course.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Courses;
