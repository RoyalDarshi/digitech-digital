// src/components/LoginPage/LoginPage.js
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <Container>
            <Typography variant="h4" className="title">Login</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" className="btn-primary" fullWidth>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;
