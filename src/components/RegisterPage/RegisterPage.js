// src/components/RegisterPage/RegisterPage.js
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import './RegisterPage.css';

const RegisterPage = () => {
    return (
        <Container>
            <Typography variant="h4" className="title">Register</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" className="btn-primary" fullWidth>
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default RegisterPage;
