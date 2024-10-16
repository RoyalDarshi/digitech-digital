import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/digitech.jpeg';
import './Navbar.css';


const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu

    const handleMouseEnter = (index) => {
        setOpenSubMenu(index); // Open submenu based on hovered item
    };

    const handleMouseLeave = () => {
        setOpenSubMenu(null); // Close submenu when mouse leaves
    };

    return (
        <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => {
                setIsOpen(false);
                setOpenSubMenu(null); // Close everything when mouse leaves dropdown
            }}
        >
            <button className="nav-link" aria-haspopup="true" aria-expanded={isOpen}>
                {title}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="dropdown-item-wrapper"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to={item.path} className="dropdown-item">
                                {item.label}
                            </Link>
                            {item.subItems && openSubMenu === index && (
                                <div className="inner-dropdown">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <div key={subIndex} className="inner-dropdown-item-wrapper">
                                            <Link to={subItem.path} className="inner-dropdown-item">
                                                {subItem.label}
                                            </Link>
                                            {subItem.subItems && (
                                                <div className="inner-inner-dropdown">
                                                    {subItem.subItems.map((innerItem, innerIndex) => (
                                                        <Link
                                                            key={innerIndex}
                                                            to={innerItem.path}
                                                            className="inner-dropdown-item"
                                                        >
                                                            {innerItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};




const Navbar = () => {
    const location = useLocation();

    const aboutItems = [
        { path: '/about', label: 'Who We Are' },
        { path: '/podcast', label: 'Podcast' },
        { path: '/videos', label: 'Videos' },
        { path: '/trainee-reviews', label: 'Trainee Reviews' },
        { path: '/placement', label: 'Placements' },
        { path: '/media-coverage', label: 'Media Coverage' },
        { path: '/batch-images', label: 'Batch Images' },
        { path: '/careers', label: 'Careers' },
    ];

    const programsItems = [
        {
            label: 'Digital Marketing ▼',
            path: '/courses/digital-marketing',
            subItems: [
                { path: '/foundation-course', label: 'Foundation Course (2 Month)' },
                { path: '/special-course', label: 'Specialist Course (3 Months+)' },
                { path: '/digital-master-course', label: 'Master Course (4.5 Months+)' },
                { path: '/digital-advance-course', label: 'Professional Course (6 Months)' },
                { path: '/annual-digital-course', label: 'Digi Hero (1 Year)' },
                { path: '/ninja-kids', label: 'Digital Ninja (Kids)' },
            ],
        },
        {
            label: 'Data Science ▼',
            path: '/master-program',
            subItems: [
                { path: '/master-program', label: 'Master Program in Data Science' },
            ],
        },
    ];

    const blogItems = [
        { path: '/blog/seo', label: 'Read Blogs' },
        { path: '/blog/smm', label: 'Submit Guest Post' },
    ];

    const centerItems = [
        {
            path: '/centers/delhi-ncr',
            label: 'Delhi/NCR ▼',
            subItems: [
                { path: '/centers/delhi-ncr/shivalik', label: 'Shivalik' },
                { path: '/centers/delhi-ncr/pitampura', label: 'Pitampura' },
                { path: '/centers/delhi-ncr/dwarka', label: 'Dwarka' },
                { path: '/centers/delhi-ncr/noida', label: 'Noida' },
                { path: '/centers/delhi-ncr/gurgaon', label: 'Gurgaon' },
                { path: '/centers/delhi-ncr/connaught-place', label: 'Connaught Place' },
                { path: '/centers/delhi-ncr/rajouri-garden', label: 'Rajouri Garden' },
                { path: '/centers/delhi-ncr/preet-vihar', label: 'Preet Vihar' },
            ]
        },
        {
            path: '/centers/uttar-pradesh',
            label: 'Uttar Pradesh ▼',
            subItems: [
                {
                    path: '/centers/lucknow',
                    label: 'Lucknow ▼',
                    subItems: [
                        { path: '/centers/lucknow/pitampura', label: 'Gomati Nager' },
                        { path: '/centers/lucknow/another-subitem', label: 'Hazratganj' },
                        { path: '/centers/lucknow/another-subitem', label: 'Aliganj' },// Add more as needed
                    ]
                },
                { path: '/centers/lucknow/another-subitem', label: 'Agra' },
                { path: '/centers/lucknow/another-subitem', label: 'Prayagraj coming soon' },
                { path: '/centers/lucknow/another-subitem', label: 'Sultanpur' },
                { path: '/centers/lucknow/another-subitem', label: 'Varanasi' },
                { path: '/centers/lucknow/another-subitem', label: 'Gorakhpur' },
                { path: '/centers/lucknow/another-subitem', label: 'Ghaziabad' },
            ]
        },
        { path: '/centers/lucknow/another-subitem', label: 'Assam ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Guwahati' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Punjab ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Bathinda' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Karnataka ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Bangalore ▼',subItems: [
                        { path: '/centers/lucknow/another-subitem', label: 'Indira Nagar' },
                        { path: '/centers/lucknow/another-subitem', label: 'Yelahanka' },
                    ] },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Rajasthan ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Jaipur' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Haryana ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Sirsa' },
                { path: '/centers/lucknow/another-subitem', label: 'Kernal Coming soon' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Maharashtra ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Mumbai Vashi' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Gujrat ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Vadodra' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Madhya Pradesh ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Indore' },
                { path: '/centers/lucknow/another-subitem', label: 'Bhopal' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Uttrakhand ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Dehradun' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Jharkhand ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Ranchi' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Chhatisgarh ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Raipur' },
                { path: '/centers/lucknow/another-subitem', label: 'Korba Coming soon' },
            ] },
    ];

    const contactItems = [
        { path: '/contact', label: 'Contact Us' },
        { path: '/contact/support', label: 'Franchise' },
        { path: '/payfee', label: 'Pay Course Fee' },
        { path: '/contact/faq', label: 'Terms and Conditions' },
        { path: '/contact/faq', label: 'Privacy Policy' },
        { path: '/contact/faq', label: 'Refund and Cancellation Policy' },
    ];

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Digitech Digital" className="navbar-logo-image" />
            </div>
            <nav className="navbar-links">
                <Link to="/" className={`nav-link`}>
                    Home
                </Link>
                <Dropdown title="About Us" items={aboutItems} />
                <Dropdown title="Our Programs" items={programsItems} />
                <Dropdown title="Blog" items={blogItems} />
                <Dropdown title="Centers" items={centerItems} />
                <Dropdown title="Contact Us" items={contactItems} />
                <input type="text" placeholder="Search courses" className="search-box" />
                <Link to="/payfee" className="pay-button">Pay Course Fee</Link>
            </nav>
        </header>
    );
};

export default Navbar;
