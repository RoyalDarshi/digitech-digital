// src/components/CourseCard/CourseCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './CourseCard.css';

const CourseCard = ({ title, description, id }) => {
    return (
        <Card className="course-card">
            <CardContent>
                <Typography variant="h5" className="course-title">{title}</Typography>
                <Typography variant="body2" className="course-description">{description}</Typography>
                <Button variant="contained" className="btn-enroll">Enroll Now</Button>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
