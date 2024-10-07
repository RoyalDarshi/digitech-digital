// src/components/CourseDetail/CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

const courseData = {
    'advanced-digital-marketing': {
        title: 'Advanced Digital Marketing Training',
        description: 'Learn all aspects of digital marketing, including SEO, SEM, social media, and more.',
        image: 'https://digiperform.com/wp-content/uploads/2023/05/machine-learning-hand-robot-touching-computer-chip-binary-data-1.jpg',
        details: 'This is a comprehensive digital marketing training that covers various aspects of the digital marketing ecosystem including SEO, social media, SEM, and more.',
    },
    'seo-course': {
        title: 'SEO Course',
        description: 'Master the art of search engine optimization and get your website to the top of search results.',
        image: 'https://digiperform.com/wp-content/uploads/2022/02/maxresdefault.jpg',
        details: 'This SEO course teaches you advanced techniques and strategies to rank websites higher in search results, focusing on both on-page and off-page SEO.',
    },
    'social-media-marketing': {
        title: 'Social Media Marketing Course',
        description: 'Understand how to run successful social media campaigns on platforms like Facebook, Instagram, and Twitter.',
        image: 'https://digiperform.com/wp-content/uploads/2022/02/Indian-student-1.jpg',
        details: 'Learn how to create and manage successful social media marketing campaigns using platforms like Facebook, Instagram, and Twitter to build a brand and grow a business.',
    },
    'web-development-training': {
        title: 'Web Development Training',
        description: 'Become proficient in front-end and back-end web development with our full-stack web development course.',
        image: 'https://digiperform.com/wp-content/uploads/2022/02/banner-img.jpg',
        details: 'This full-stack web development course covers front-end and back-end technologies, preparing you to become a skilled web developer capable of building full-scale applications.',
    },
};

const CourseDetail = () => {
    const { courseId } = useParams(); // Get the courseId from the URL params
    const course = courseData[courseId]; // Fetch course data based on courseId

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-detail-container">
            <h1 className="course-detail-title">{course.title}</h1>
            <img src={course.image} alt={course.title} className="course-detail-image" />
            <p className="course-detail-description">{course.description}</p>
            <div className="course-detail-content">
                <h2>Course Details</h2>
                <p>{course.details}</p>
            </div>
        </div>
    );
};

export default CourseDetail;
