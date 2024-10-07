import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
    },
    card: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}));

const courses = ['Digital Marketing 101', 'Advanced SEO', 'Social Media Mastery'];

const CoursesSection = () => {
    const classes = useStyles();

    return (
        <Container className={classes.section}>
            <Typography variant="h4" align="center">Our Courses</Typography>
            <Grid container spacing={4} justifyContent="center">
                {courses.map((course) => (
                    <Grid item xs={12} sm={4} key={course}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6">{course}</Typography>
                                <Typography variant="body1">Enroll in {course} and become an expert.</Typography>
                                <Button className={classes.button} variant="contained">Learn More</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CoursesSection;
