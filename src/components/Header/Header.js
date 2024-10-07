// src/components/Header/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                Digitech Digital
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-actions">
                <input type="text" placeholder="Search..." className="search-box" />
                <NavLink to="/pay-fee" className="pay-button">
                    Pay Course Fee
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
