// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PayFee from './components/PayFee/PayFee';
import Navbar from "./components/Navbar/Navbar";
import CourseDetail from "./components/CourseDetail/CourseDetail";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/payfee" element={<PayFee />} />
                    <Route path="/course/:courseId" element={<CourseDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
