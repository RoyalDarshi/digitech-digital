// src/components/HomePage/HomePage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './HomePage.css';

const HomePage = () => {
    return (
        <Container className="container">
            <Typography variant="h2" className="main-title">Welcome to Digitech Digital</Typography>
            <Typography variant="h4" className="sub-title">Your pathway to digital marketing success</Typography>
            <Button variant="contained" className="btn-learn-more">Learn More</Button>
        </Container>
    );
};

export default HomePage;
