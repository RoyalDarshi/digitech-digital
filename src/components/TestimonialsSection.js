import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
    },
}));

const TestimonialsSection = () => {
    const classes = useStyles();

    return (
        <Container className={classes.section}>
            <Typography variant="h4" align="center">What Our Clients Say</Typography>
            <Typography align="center" variant="body1">
                "DIGITECH DIGITAL helped us grow our business with excellent digital marketing strategies!"
            </Typography>
        </Container>
    );
};

export default TestimonialsSection;
