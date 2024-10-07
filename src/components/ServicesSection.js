import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
    },
    card: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
}));

const services = ['SEO', 'Content Marketing', 'Social Media'];

const ServicesSection = () => {
    const classes = useStyles();

    return (
        <Container className={classes.section}>
            <Typography variant="h4" align="center">Our Services</Typography>
            <Grid container spacing={4} justifyContent="center">
                {services.map((service) => (
                    <Grid item xs={12} sm={4} key={service}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6">{service}</Typography>
                                <Typography variant="body1">Expert {service} services to boost your online presence.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ServicesSection;
