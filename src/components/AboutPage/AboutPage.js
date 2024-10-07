// src/components/AboutPage/AboutPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <Container>
            <Typography variant="h4" className="title">About Us</Typography>
            <Typography variant="body1" className="description">Information about the organization goes here.</Typography>
        </Container>
    );
};

export default AboutPage;
