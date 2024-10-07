// src/pages/AboutPage.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutPage = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>About Us</Typography>
            <Typography>
                DIGITECH DIGITAL is a leading digital marketing agency focused on helping businesses achieve their online marketing goals.
                Our team of experts utilizes the latest strategies and technologies to drive results for our clients.
            </Typography>
            <Typography>
                With years of experience in the industry, we have built a reputation for delivering exceptional service and measurable results.
            </Typography>
        </Container>
    );
};

export default AboutPage;
