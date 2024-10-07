import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        background: theme.palette.primary.main,
        padding: theme.spacing(6),
        textAlign: 'center',
        color: '#fff',
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.hero}>
            <Typography variant="h2">Welcome to DIGITECH DIGITAL</Typography>
            <Typography variant="h5">Your partner in Digital Marketing Excellence</Typography>
            <Button className={classes.button} variant="contained">Get Started</Button>
        </div>
    );
};

export default HeroSection;
