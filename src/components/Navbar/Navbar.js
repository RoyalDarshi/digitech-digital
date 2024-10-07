import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/digitech.jpeg';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Digitech Digital" className="navbar-logo-image"/>
            </div>
            <nav className="navbar-links">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                    About
                </Link>
                <Link
                    to="/courses"
                    className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`}
                >
                    Courses
                </Link>
                <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                    Contact
                </Link>
                <input type="text" placeholder="Search courses" className="search-box"/>
                <Link to="/payfee" className="pay-button">
                    Pay Course Fee
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
