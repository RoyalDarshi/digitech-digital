// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Container>
            <Typography variant="h4" className="title">Dashboard</Typography>
            <Typography variant="body1" className="description">Welcome to your dashboard!</Typography>
        </Container>
    );
};

export default Dashboard;
