// src/components/ContactPage/ContactPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <Container>
            <Typography variant="h4" className="title">Contact Us</Typography>
            <Typography variant="body1" className="description">Contact information will be here.</Typography>
        </Container>
    );
};

export default ContactPage;
