import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

function ServicesPage() {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Our Services
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6">SEO</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Optimize your website for better search engine rankings.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6">PPC</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Pay-per-click advertising to drive targeted traffic.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6">Content Marketing</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Create and distribute valuable content to attract customers.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ServicesPage;
