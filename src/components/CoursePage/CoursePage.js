// src/components/CoursePage/CoursePage.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import CourseCard from '../CourseCard/CourseCard';
import './CoursePage.css';

const CoursePage = () => {
    const courses = [
        { id: 1, title: 'Digital Marketing', description: 'Learn the fundamentals of digital marketing.' },
        { id: 2, title: 'SEO Strategies', description: 'Improve your SEO skills.' },
        { id: 3, title: 'Content Marketing', description: 'Create compelling content for your audience.' },
    ];

    return (
        <Container className="container">
            <Typography variant="h2" className="title">Our Courses</Typography>
            <Grid container spacing={4}>
                {courses.map(course => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <CourseCard title={course.title} description={course.description} id={course.id} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CoursePage;
