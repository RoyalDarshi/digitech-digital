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
import MasterProgram from "./components/MasterProgram/MasterProgram";
import AnnualProgram from "./components/AnnualProgram/AnnualProgram";
import AdvancedCourse from "./components/AdvancedCourse/AdvancedCourse";
import MasterCourse from "./components/MasterCourse/MasterCourse";
import FoundationCourse from "./components/FoundationCourse/FoundationCourse";
import DigitalMarketingSpecialistCourse from "./components/DigitalMarketingSpecialistCourse/DigitalMarketingSpecialistCourse";
import DigitalMarketingMasterCourse from "./components/DigitalMarketingMasterCourse/DigitalMarketingMasterCourse";
import AdvancedDigitalMarketingCourse from "./components/AdvancedDigitalMarketingCourse/AdvancedDigitalMarketingCourse";
import AnnualDigitalMarketingProgram from "./components/AnnualDigitalMarketingProgram/AnnualDigitalMarketingProgram";
import NinjaKids from "./components/NinjaKids/NinjaKids";
import EnrollNow from "./components/EnrollNow/EnrollNow";
import Podcast from "./components/Podcast/Podcast";
import Placement from "./components/Placement/Placement";

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
                    <Route path={"/enroll-now"} element={<EnrollNow />} />
                    <Route path={"/master-program"} element={<MasterProgram />} />
                    <Route path={"/annual-program"} element={<AnnualProgram />} />
                    <Route path={"/advanced-course"} element={<AdvancedCourse />} />
                    <Route path={"/foundation-course"} element={<FoundationCourse />} />
                    <Route path={"/special-course"} element={<DigitalMarketingSpecialistCourse />} />
                    <Route path={"/digital-master-course"} element={<DigitalMarketingMasterCourse />} />
                    <Route path={"/digital-advance-course"} element={<AdvancedDigitalMarketingCourse />} />
                    <Route path={"/annual-digital-course"} element={<AnnualDigitalMarketingProgram />} />
                    <Route path={"/ninja-kids"} element={<NinjaKids />} />
                    <Route path={"/podcast"} element={<Podcast />} />
                    <Route path={"/placement"} element={<Placement />} />
                    <Route path={"/master-course"} element={<MasterCourse />} />
                    <Route path="/course/:courseId" element={<CourseDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
