import React from 'react';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';

function ContactPage() {
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Contact Us
            </Typography>
            <Paper elevation={3} sx={{ p: 4 }}>
                <form>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Send Message
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default ContactPage;
